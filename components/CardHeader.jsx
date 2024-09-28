import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CardHeader({ title, icon }) {
  return (
    <View style={styles.cardHeadingContainer}>
      <Ionicons name={icon} size={24} color="#333" style={styles.icon} />
      <Text style={styles.cardHeading}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardHeadingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardHeading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginLeft: 10,
  },
});
