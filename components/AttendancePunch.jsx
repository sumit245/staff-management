// import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
// import { useState } from "react";
// import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
// import ContainerComponent from "./ContainerComponent";
// //import MyHeader from "./header/MyHeader";

// export default function AttendancePunch() {
//   const [permission, requestPermission] = useCameraPermissions();

//   if (!permission) {
//     // Camera permissions are still loading.
//     return <View />;
//   }

//   if (!permission.granted) {
//     // Camera permissions are not granted yet.
//     return (
//       <View style={styles.container}>
//         <Text style={styles.message}>
//           We need your permission to show the camera
//         </Text>
//         <Button onPress={requestPermission} title="Grant Permission" />
//       </View>
//     );
//   }

//   return (
//     <ContainerComponent>
//       {/* <MyHeader
//         title="Select Project Code"
//         isBack={true}
//         hasIcon={true}
//         icon={"trash-outline"}
//       /> */}
//   <View style={styles.header}>
//     <Text style={styles.title}>Attendance Punch</Text>
//     <TouchableOpacity>
//       <Text style={styles.punchHistory}>Punch History</Text>
//     </TouchableOpacity>
//   </View>
//       <View style={styles.container}>
//         {/* Circular frame container for the camera */}
//         <View style={styles.cameraContainer}>
//           <CameraView style={styles.camera} facing="front" />
//         </View>
//       </View>
//     </ContainerComponent>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   message: {
//     textAlign: "center",
//     paddingBottom: 10,
//   },
//   cameraContainer: {
//     height: 240, // Same width and height to maintain a square for the circle
//     width: 240,
//     borderRadius: 120, // Half of height/width to make a circle
//     borderWidth: 6,
//     borderColor: "#2b87b0",
//     overflow: "hidden", // Ensures that the content inside is clipped to the circle
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   camera: {
//     height: "100%",
//     width: "100%",
//   },

//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     width: "100%",
//     paddingHorizontal: 2,
//     marginTop: 10,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "black",
//   },
//   punchHistory: {
//     fontSize: 16,
//     color: "#2b87b0",
//   },
// });

import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Button,
  Image,
} from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import ContainerComponent from "./ContainerComponent";
import Geolocation from "react-native-geolocation-service";
import MapView, { Marker } from "react-native-maps";
import { PermissionsAndroid, Platform } from "react-native";

export default function AttendancePunch() {
  const [permission, requestPermission] = useCameraPermissions();
  const [location, setLocation] = useState(null);
  const [photoUri, setPhotoUri] = useState(null);
  const cameraRef = useRef(null);

  // Request location permission
  const requestLocationPermission = async () => {
    try {
      if (Platform.OS === "android") {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "Location Permission",
            message: "This app needs access to your location for attendance.",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK",
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getLocation();
        } else {
          Alert.alert("Permission Denied", "Location permission is required.");
        }
      } else {
        getLocation();
      }
    } catch (err) {
      console.warn(err);
    }
  };

  // Get current location
  const getLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      },
      (error) => {
        Alert.alert("Error", "Unable to fetch location.");
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  // Handle punch-in action
  const handlePunchIn = async () => {
    // Check if location permission has been granted
    if (Platform.OS === "android") {
      const granted = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      if (!granted) {
        Alert.alert(
          "Permission Denied",
          "Location permission is required before punching in."
        );
        await requestLocationPermission();
        return;
      }
    }

    // Ensure both location and photo are available
    if (!location || !photoUri) {
      Alert.alert(
        "Missing Information",
        "Please capture your face and allow location access before punching in."
      );
      return;
    }

    console.log("Punching in with location:", location);
    console.log("Photo URI:", photoUri);
    Alert.alert("Punch In Successful", "Your punch-in has been recorded.");
  };

  // Request permissions on component mount
  useEffect(() => {
    requestLocationPermission();
    requestPermission(); // Request camera permission
  }, []);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setPhotoUri(photo.uri);
      Alert.alert("Photo Captured", "Your photo has been taken.");
    }
  };

  return (
    <ContainerComponent>
      {/* Show the camera at the top */}
      <View style={styles.header}>
        <Text style={styles.title}>Attendance Punch</Text>
        <TouchableOpacity>
          <Text style={styles.punchHistory}>Punch History</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cameraContainer}>
        {photoUri ? (
          <Image source={{ uri: photoUri }} style={styles.capturedImage} />
        ) : (
          <CameraView
            style={styles.camera}
            ref={cameraRef} // Store reference to the camera
            facing="front"
          />
        )}
      </View>

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          onPress={takePicture}
          style={{
            backgroundColor: "#2b87b0",
            paddingVertical: 6,
            paddingHorizontal: 18,
            borderRadius: 5,
            width: 140,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Capture Photo
          </Text>
        </TouchableOpacity>
      </View>

      {/* Display map for location in the middle */}
      <View style={styles.mapContainer}>
        {location ? (
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
            <Marker coordinate={location} title="Your Location" />
          </MapView>
        ) : (
          <Text style={styles.loadingText}>Fetching location...</Text>
        )}
      </View>

      {/* Punch In and Punch Out Buttons at the bottom */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.punchInButton} onPress={handlePunchIn}>
          <Text style={styles.buttonText}>PUNCH IN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.punchOutButton}>
          <Text style={styles.buttonText}>PUNCH OUT</Text>
        </TouchableOpacity>
      </View>
    </ContainerComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  cameraContainer: {
    height: 240,
    width: 240,
    borderRadius: 120,
    borderWidth: 6,
    borderColor: "#2b87b0",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  camera: {
    height: "100%",
    width: "100%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 2,
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  punchHistory: {
    fontSize: 16,
    color: "#2b87b0",
  },
  mapContainer: {
    height: 300,
    marginVertical: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  loadingText: {
    textAlign: "center",
    fontSize: 16,
    color: "#666",
  },
  capturedImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  punchInButton: {
    flex: 1,
    backgroundColor: "#28a745",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginRight: 10,
  },
  punchOutButton: {
    flex: 1,
    backgroundColor: "#ffc107",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginLeft: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});


