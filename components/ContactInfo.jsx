import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/components.styles";

export default function ContactInfo({ name, status }) {
  return (
    <View style={styles.contactInfo}>
      <Text style={styles.contactName}>{name}</Text>
      <Text style={styles.contactStatus}>{status}</Text>
    </View>
  );
}
