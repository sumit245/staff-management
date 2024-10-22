import { View, TouchableOpacity } from "react-native"
import { styles } from "../../styles/components.styles"
import { H5 } from "../text";

export default function MyRadioButton({ options, selectedValue, onValueChange, title }) {
  return (
    <View style={styles.mv2}>
      <H5>{title}</H5>
      {options.map((option) => (
        <TouchableOpacity
          key={option.value}
          style={styles.radioButton}
          onPress={() => onValueChange(option.value)}
        >
          <View style={styles.radioInner}>
            {selectedValue === option.value && <View style={styles.radioDot} />}
          </View>
          <H5 style={{ fontWeight: 'bold' }}>{option.label}</H5>
        </TouchableOpacity>
      ))}
    </View>
  );
}
