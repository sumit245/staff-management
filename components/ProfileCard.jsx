import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function ProfileCard({ imageUri, name, phoneNumber }) {
  return (
    <View style={styles.profileCard}>
      <Image style={styles.profileImage} source={{ uri: imageUri }} />
      <View style={styles.profileInfo}>
        <Text style={styles.profileName}>{name}</Text>
        <Text style={styles.profileNumber}>{phoneNumber}</Text>
      </View>
      <Icon name="chevron-forward-outline" size={20} color="#333" />
    </View>
  );
}

// Styles for ProfileCard
const styles = StyleSheet.create({
  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#ccc",
    marginRight: 15,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  profileNumber: {
    fontSize: 14,
    color: "#666",
  },
});
