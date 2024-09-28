import React from "react";
import { Text, StyleSheet } from "react-native";

const TimeText = ({ time }) => {
  return (
    <Text style={styles.timeText}>
      {time ? `Time: ${time}` : "No time recorded yet"}
    </Text>
  );
};

const styles = StyleSheet.create({
  timeText: {
    fontSize: 16,
    color: "#888", // Adjust color as needed
    marginBottom: 20,
  },
});

export default TimeText;
