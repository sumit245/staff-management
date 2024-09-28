import React from "react";
import { Text, StyleSheet } from "react-native";

const StatusText = ({ text }) => {
  return <Text style={styles.statusText}>{text}</Text>;
};

const styles = StyleSheet.create({
  statusText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333", // Adjust color as needed
  },
});

export default StatusText;
