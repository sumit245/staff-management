import { TouchableOpacity, Text } from "react-native";
import { styles } from "../../styles/components.styles";
import { H2 } from "../text";

export default function OutlinedButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.outlinedButton} onPress={onPress}>
      <H2 style={styles.btnText}>{title}</H2>
    </TouchableOpacity>
  );
}
