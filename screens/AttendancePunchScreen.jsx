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
import ContainerComponent from "../components/ContainerComponent";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";
import { PRIMARY_COLOR, SCREEN_WIDTH } from "../styles/constant";

export default function AttendancePunch() {
  const [permission, requestPermission] = useCameraPermissions();
  const [location, setLocation] = useState(null);
  const [markerLocation, setMarkerLocation] = useState(null); // State for marker location
  const [photoUri, setPhotoUri] = useState(null);
  const cameraRef = useRef(null);

  // Request location permission and fetch location
  const requestLocationPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission Denied", "Location permission is required.");
      return;
    }

    // Get the current location
    const currentLocation = await Location.getCurrentPositionAsync({});
    setLocation({
      latitude: currentLocation.coords.latitude,
      longitude: currentLocation.coords.longitude,
    });
  };

  // Update marker location whenever the location changes 
  useEffect(() => {
    if (location) {
      setMarkerLocation(location); // Update marker location state
    }
  }, [location]);

  // Handle punch-in action
  const handlePunchIn = () => {
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
      <View style={styles.header}>
        <Text style={styles.title}>Attendance Punch</Text>
        <TouchableOpacity>
          <Text style={styles.punchHistory}>Punch History</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cameraContainer}>
        {photoUri ? (
          <View style={styles.capturedImageContainer}>
            <Image source={{ uri: photoUri }} style={styles.capturedImage} />
          </View>
        ) : (
          <CameraView style={styles.camera} ref={cameraRef} facing="front" />
        )}
      </View>

      <TouchableOpacity
        onPress={takePicture}
        style={{
          backgroundColor: "#2b87b0",
          marginVertical: 8,
          paddingVertical: 6,
          paddingHorizontal: 18,
          borderRadius: 5,
          width: 140,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
          Capture Photo
        </Text>
      </TouchableOpacity>

      <View style={styles.mapContainer}>
        {markerLocation ? ( // Use markerLocation instead of location
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: markerLocation.latitude,
              longitude: markerLocation.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
            <Marker coordinate={markerLocation} title="Your Location" />
          </MapView>
        ) : (
          <Text style={styles.loadingText}>Fetching location...</Text>
        )}
      </View>

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
    height: SCREEN_WIDTH / 1.5,
    width: SCREEN_WIDTH / 1.5,
    borderRadius: SCREEN_WIDTH / 3,
    borderWidth: 6,
    borderColor: PRIMARY_COLOR,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  camera: {
    height: SCREEN_WIDTH / 1.5,
    width: SCREEN_WIDTH / 1.5,
  },
  capturedImageContainer: {
    height: 240,
    width: 240,
    borderRadius: 120,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  capturedImage: {
    height: "100%",
    width: "100%",
    borderRadius: 120,
    position: "absolute",
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
    width: SCREEN_WIDTH - 20,
    height: SCREEN_WIDTH,
  },
  loadingText: {
    textAlign: "center",
    fontSize: 16,
    color: "#666",
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
