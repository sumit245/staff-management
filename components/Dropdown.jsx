import React, { useState } from "react";
import { View, Text } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { styles } from "../styles/components.styles";
import { items } from "../utils/faker";
const Dropdown = () => {
  const [selectedItem, setSelectedItem] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.selectedText}>Selected: {selectedItem}</Text>
      <RNPickerSelect
        onValueChange={(value) => setSelectedItem(value)}
        items={items}
        value={selectedItem}
        placeholder={{ label: "Select a language", value: null }}
      />
    </View>
  );
};
export default Dropdown;
