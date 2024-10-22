import React, { useState, useRef } from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import { RNCamera } from "react-native-camera";
import Geolocation from "react-native-geolocation-service";

const Attendance = () => {
  const [photo, setPhoto] = useState(null);
  const [location, setLocation] = useState(null);
  const [time, setTime] = useState("");
  const cameraRef = useRef(null);

  const capture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      setPhoto(data.uri);
      getLocation();
      setTime(new Date().toLocaleString());
    }
  };

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      },
      (error) => {
        console.error(error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.camera}
        ref={cameraRef}
        type={RNCamera.Constants.Type.back}
      >
        <View style={styles.buttonContainer}>
          <Button title="Capture" onPress={capture} />
        </View>
      </RNCamera>
      {photo && <Image source={{ uri: photo }} style={styles.image} />}
      {location && (
        <Text>
          Location: {location.latitude}, {location.longitude}
        </Text>
      )}
      {time && <Text>Time: {time}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
    justifyContent: "flex-end",
  },
  buttonContainer: {
    flex: 0.1,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    margin: 10,
  },
});

export default Attendance;
