import React, { useState } from "react";
import MenuItem from "../components/MenuItem";
import { internal } from "../utils/faker";
import ContainerComponent from "../components/ContainerComponent";
import MyHeader from "../components/header/MyHeader";
import { View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export default function SettingsScreen() {
  const navigation = useNavigation();

  return (
    <ContainerComponent justifyContent="space-between">
      <MyHeader
        title="Setting"
        isBack={true}
        hasIcon={true}
        icon={"cog-outline"}
      />
      <View style={{ flex: 1 }}>
        {internal.map((item, index) => (
          <MenuItem
            key={index}
            label={item.label}
            icon={item.icon}
            onPress={() => navigation.navigate(item.page)}
          />
        ))}
      </View>
    </ContainerComponent>
  );
}
