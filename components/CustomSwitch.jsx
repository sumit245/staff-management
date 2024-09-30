import React, { useState } from "react";
import { View, Switch, Text, StyleSheet } from "react-native";
import { styles } from "../styles/components.styles";

const CustomSwitch = ({
  value = false,
  onValueChange,
  label = "",
  color = "#2b87b0",
}) => {
  const [switchValue, setSwitchValue] = useState(value);

  const handleToggle = (newValue) => {
    setSwitchValue(newValue);
    onValueChange && onValueChange(newValue); // Call the onValueChange prop if it exists
  };

  return (
    <View style={styles.container}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <Switch
        value={switchValue}
        onValueChange={handleToggle}
        trackColor={{ false: "#767577", true: color }}
        thumbColor={switchValue ? "#ffffff" : "#f4f3f4"}
      />
    </View>
  );
};

export default CustomSwitch;
