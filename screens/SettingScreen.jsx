import React, { useState } from "react";
import ProfileCard from "../components/ProfileCard";
import MenuItem from "../components/MenuItem";
import { menuItems } from "../utils/faker";
import ContainerComponent from "../components/ContainerComponent";
import { View, TouchableOpacity } from "react-native";
import { H5 } from "../components/text";
import { DANGER_COLOR } from "../styles/constant";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export default function SettingsScreen() {
  const navigation = useNavigation();
  const [isHovered, setIsHovered] = useState(false);

  const handleMenuItemPress = (label) => {
    if (label === "My Purchase") {
      navigation.navigate("Requisitions");
    } else if (label === "Notification") {
      navigation.navigate("NotificationScreen");
    } else if (label === "Privacy") {
      navigation.navigate("PrivacyPolicy");
    } else {
      console.log(label);
    }
  };

  const handleLogoutPress = () => {
    console.log("Logout pressed"); 
    navigation.navigate("loginScreen"); 
  };

  return (
    <ContainerComponent justifyContent="space-between">
      <ProfileCard
        imageUri="https://randomuser.me/api/portraits/men/7.jpg"
        name="Mihir Mishra"
        phoneNumber="+91 6204765678"
      />
      <View style={{ flex: 1 }}>
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            label={item.label}
            icon={item.icon}
            onPress={() => handleMenuItemPress(item.label)}
          />
        ))}
      </View>

      <TouchableOpacity
        style={{
          marginBottom: 8,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={handleLogoutPress}
        onPressIn={() => setIsHovered(true)}
        onPressOut={() => setIsHovered(false)}
      >
        <Icon name="power-outline" size={24} color={DANGER_COLOR} />
        <H5 style={{ color: isHovered ? "darkred" : DANGER_COLOR }}>Logout</H5>
      </TouchableOpacity>
    </ContainerComponent>
  );
}
