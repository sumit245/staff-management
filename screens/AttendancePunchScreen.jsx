import React, { useEffect, useRef, useState } from "react";
import { Modal, View, TouchableOpacity } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { LIGHT, spacing } from "../styles";

export default function CameraInput({ isCameraOpen, setIsCameraOpen }) {
  const [permission, requestPermission] = useCameraPermissions();
  const [hasPermissionChecked, setHasPermissionChecked] = useState(false);
  const [saving, setSaving] = useState(false);
  const [photoTaken, setPhotoTaken] = useState(false);
  const cameraRef = useRef(null);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      if (!permission?.granted) {
        const { status } = await requestPermission();
        if (status !== "granted") {
          alert("Camera permission is required.");
        }
      }
      setHasPermissionChecked(true);
    })();
  }, []);

  const handleCapture = async () => {
    if (cameraRef.current && !saving) {
      try {
        setSaving(true);
        const photo = await cameraRef.current.takePictureAsync();
        setPhotoTaken(true); // show arrow
        alert("Photo captured.");
      } catch (err) {
        console.error("Capture failed:", err);
      } finally {
        setSaving(false);
      }
    }
  };

  const handleNavigateHome = () => {
    setPhotoTaken(false);
    navigation.navigate("homeScreen");
  };

  if (!hasPermissionChecked) return null;

  return (
    <Modal visible={isCameraOpen} animationType="slide">
      <View style={{ flex: 1 }}>
        {/* Camera View with Green Border in the center */}
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <CameraView
            ref={cameraRef}
            style={{ flex: 1, width: "100%" }}
            facing="front"
          />
          <View
            style={[
              spacing.br2,
              spacing.bw1,
              {
                position: "absolute",
                top: "20%",
                width: "90%",
                height: "50%",
                borderColor: "green",
              },
            ]}
          />
        </View>

        {/* Capture Button */}
        <TouchableOpacity
          onPress={handleCapture}
          style={[
            {
              position: "absolute",
              bottom: 40,
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "center",
            },
          ]}
        >
          <View
            style={[
              spacing.bw2,
              {
                width: 70,
                height: 70,
                borderRadius: 35,
                borderColor: LIGHT,
                backgroundColor: "red",
              },
            ]}
          />
        </TouchableOpacity>

        {/* Arrow Button (visible after photo taken) */}
        {photoTaken && (
          <TouchableOpacity
            onPress={handleNavigateHome}
            style={[
              spacing.p2,
              spacing.br5,
              {
                position: "absolute",
                bottom: 50,
                right: 20,
                backgroundColor: "rgba(0,0,0,0.5)",
              },
            ]}
          >
            <Ionicons name="arrow-forward" size={30} color="white" />
          </TouchableOpacity>
        )}
      </View>
    </Modal>
  );
}
