import { View, TouchableOpacity, Text } from "react-native"
import { styles } from "../../styles/components.styles"
import { PRIMARY_COLOR } from "../../styles/constant"
import { H5 } from "../text"; 

export default function MyRadioButton({
  options,
  selectedValue,
  onValueChange,
  title,
}) {
  return (
    <View style={styles.radioContainer}>
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
          <Text style={styles.radioText}>{option.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
