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

// const styles = StyleSheet.create({
//   audioContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     padding: 10,
//     borderTopWidth: 1,
//     borderColor: "#ddd",
//   },
//   audioText: {
//     marginLeft: 10,
//     fontSize: 16,
//   },
// });

export default Audio;
