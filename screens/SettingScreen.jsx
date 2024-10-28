import React from "react";
import ProfileCard from "../components/ProfileCard";
import MenuItem from "../components/MenuItem";
import { menuItems } from "../utils/faker";
import ContainerComponent from "../components/ContainerComponent";
import { View, TouchableOpacity } from "react-native";
import { H5 } from "../components/text";
import { DANGER_COLOR } from "../styles/constant";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { staff } from "../utils/faker";

export default function SettingsScreen() {
  const navigation = useNavigation();

  const handleLogoutPress = () => {
    console.log("Logout pressed");
    navigation.navigate("loginScreen");
  };

  const handleInternalSetting = () => {
    console.log("Navigating to Internal Setting");
    navigation.navigate("InternalSetting");
  };

  const handlerequisitions = () => {
    console.log("Navigating to RequisitionScreen");
    navigation.navigate("requisitions");
  };

  const handleHolidayList = () => {
    console.log("Navigating to HolidayListScreen");
    navigation.navigate("HolidayListScreen");
  };

  return (
    <ContainerComponent justifyContent="space-between">
      <ProfileCard
        imageUri={staff.image}
        name={`${staff.first_name} ${staff.last_name}`}
        phoneNumber={staff.phone}
        onPress={() => navigation.navigate("profileScreen")}
      />
      <View style={{ flex: 1 }}>
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            label={item.label}
            icon={item.icon}
            onPress={() => {
              if (item.label === "Settings") {
                handleInternalSetting();
              } else if (item.label === "My Purchases") {
                handlerequisitions();
              } else if (item.label === "Events") {
                handleHolidayList(); // Navigate to HolidayListScreen
              } else {
                navigation.navigate(item.page);
              }
            }}
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
      >
        <Icon name="power-outline" size={24} color={DANGER_COLOR} />
        <H5 style={{ color: DANGER_COLOR }}>Logout</H5>
      </TouchableOpacity>
    </ContainerComponent>
  );
}
