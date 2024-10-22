import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function AttendancePunch() {
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Circular frame container for the camera */}
      <View style={styles.cameraContainer}>
        <CameraView
          style={styles.camera}
          facing="front"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  cameraContainer: {
    height: 240, // Same width and height to maintain a square for the circle
    width: 240,
    borderRadius: 120, // Half of height/width to make a circle
    borderWidth: 6,
    borderColor: 'green',
    overflow: 'hidden', // Ensures that the content inside is clipped to the circle
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    height: '100%',
    width: '100%',
  },
});
