import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ContainerComponent from "./ContainerComponent";

export default function CardItem({ title, icon }) {
  return (
    <ContainerComponent>
      <TouchableOpacity style={styles.card}>
        <Ionicons name={icon} size={40} color="#E0A600" style={styles.icon} />
        <Text style={styles.cardTitle}>{title}</Text>
      </TouchableOpacity>
    </ContainerComponent>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 100,
  },
  icon: {
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
  },
});
