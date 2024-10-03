import React, { useState } from "react";
import { View, Text, } from "react-native";
import { Checkbox as PaperCheckbox } from "react-native-paper";
import { styles } from "../../styles/components.styles";
import { H5 } from "../text";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../styles/constant";


export default function CustomCheckbox({ label, onChange, ...textStyle }) {
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-start' }}>
      <PaperCheckbox
        status={isChecked ? "checked" : "unchecked"}
        color={isChecked ? PRIMARY_COLOR : SECONDARY_COLOR}
        onPress={() => setChecked((isChecked) => !isChecked)}
        rippleColor={PRIMARY_COLOR}
      />
      {label && (
        <H5 style={{ fontWeight: 'bold', ...textStyle }} >
          {label}
        </H5>
      )}
    </View>
  );
}
