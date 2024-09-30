import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { styles } from "../styles/components.styles";

const Audio = () => {
  const handleAudioRecord = () => {
    // Add functionality to handle recording audio
  };

  return (
    <View style={styles.audioContainer}>
      <TouchableOpacity onPress={handleAudioRecord}>
        <Ionicons name="mic" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.audioText}>Record your voice</Text>
    </View>
  );
};

export default Audio;
