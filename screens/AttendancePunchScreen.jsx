import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Image,
} from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import ContainerComponent from "../components/ContainerComponent";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";
import { styles } from "../styles/temp.styles";
import MyHeader from "../components/header/MyHeader";
import Button from "../components/buttons/Button";




export default function AttendancePunchScreen() {
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

  const takePictureAndNavigate = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setPhotoUri(photo.uri);
      navigation.navigate("Dashboard");
    }
  };

  return (
    <ContainerComponent>
      <MyHeader title="Record Your Face" />

      <View style={styles.cameraContainer}>
        {photoUri ? (
          <View style={styles.capturedImageContainer}>
            <Image source={{ uri: photoUri }} style={styles.capturedImage} />
          </View>
        ) : (
          <CameraView style={styles.camera} ref={cameraRef} facing="front" />
        )}
      </View>

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
        <Button
          style={[styles.btn, styles.bgPrimary, { justifyContent: "center" }]}
          onPress={takePictureAndNavigate}
        >
          <Text style={styles.buttonText}>Take Picture</Text>
        </Button>
      </View>
    </ContainerComponent>
  );
}


