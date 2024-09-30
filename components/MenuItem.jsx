import React from "react";
import { View, TouchableOpacity, Text, Alert } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from "../styles/components.styles";
import { menuItems } from "../utils/faker";
const MenuItem = ({ iconName, title, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Icon name={iconName} size={24} color="#333" style={styles.icon} />
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);
const MenuItemsList = () => {
  const handleMenuItemPress = (title) => {
    Alert.alert("Menu Item Pressed", `You pressed: ${title}`);
  };
  return (
    <View>
      {menuItems.map((item) => (
        <MenuItem
          key={item.id}
          iconName={item.iconName}
          title={item.title}
          onPress={() => handleMenuItemPress(item.title)}
        />
      ))}
    </View>
  );
};
export default MenuItemsList;
