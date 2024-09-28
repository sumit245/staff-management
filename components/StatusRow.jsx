import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function StatusRow({ numbers = [], labels = [] }) {
  return (
    <View style={styles.row}>
      {numbers.length > 0 &&
        numbers.map((num, index) => (
          <Text key={index} style={styles.number}>
            {num}
          </Text>
        ))}
      {labels.length > 0 &&
        labels.map((label, index) => (
          <Text key={index} style={styles.label}>
            {label}
          </Text>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  number: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    width: 60,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    width: 80,
    height: 30,
  },
});
