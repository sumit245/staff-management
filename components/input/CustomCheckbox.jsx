import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Checkbox as PaperCheckbox } from "react-native-paper";
import { styles } from "../../styles/components.styles";
import ContainerComponent from "../ContainerComponent";

export default function CustomCheckbox({ label }) {
  const [isChecked, setChecked] = useState(false);
  const [enabled, setEnabled] = useState(true);

  const handlePress = () => {
    if (enabled) {
      setChecked(!isChecked);
    }
    setEnabled(!enabled);
  };

  return (
    <ContainerComponent>
      <View>
        <TouchableOpacity onPress={handlePress}>
          <View>
            <PaperCheckbox
              status={isChecked ? "checked" : "unchecked"}
              disabled={!enabled}
            />
            {label && (
              <Text style={[styles.label, !enabled && styles.disabled]}>
                {label}
              </Text>
            )}
          </View>
        </TouchableOpacity>
      </View>
    </ContainerComponent>
  );
}
