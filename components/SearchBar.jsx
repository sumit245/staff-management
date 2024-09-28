import React from "react";
import { View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../styles/components.styles";

export default function SearchBar({ placeholder, value, onChangeText }) {
  return (
    <View style={styles.searchBar}>
      <Ionicons name="search-outline" size={20} color="#333" />
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={styles.searchInput}
      />
    </View>
  );
}
