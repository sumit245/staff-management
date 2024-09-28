import React from "react";
import { View, Image, Text } from "react-native";
import { styles } from "../styles/components.styles";

export default function Avatar({ avatar, name, online }) {
  return (
    <View style={styles.avatarContainer}>
      {avatar ? (
        <Image source={{ uri: avatar }} style={styles.avatar} />
      ) : (
        <View style={styles.placeholderAvatar}>
          <Text style={styles.placeholderText}>{name.slice(0, 2)}</Text>
        </View>
      )}
      {online && <View style={styles.onlineDot} />}
    </View>
  );
}
