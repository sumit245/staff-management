import React from "react";
import { View, StyleSheet } from "react-native";

const Rectangular = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, // For Android shadow
    borderWidth: 1,
    height: 120,
    borderColor: "black",
  },
});

export default Rectangular;
