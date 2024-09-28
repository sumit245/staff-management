import React from "react";
import { View, StyleSheet } from "react-native";
import ProfileCard from "../components/ProfileCard";
import MenuItem from "../components/MenuItem";
import { menuItems } from "../utils/faker";

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <ProfileCard
        imageUri="https://randomuser.me/api/portraits/men/7.jpg"
        name="Almayra Zamzamy"
        phoneNumber="+91 620 - 3476 - 5678"
      />

      {menuItems.map((item, index) => (
        <MenuItem
          key={index}
          label={item.label}
          icon={item.icon}
          onPress={() => console.log(item.label)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 30,
  },
});
