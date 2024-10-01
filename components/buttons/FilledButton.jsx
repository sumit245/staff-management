import { TouchableOpacity } from "react-native";
import { styles } from "../../styles/components.styles";
import { H2 } from "../text";

export default function FilledButton({ title, onPress }) {
  return (
    <TouchableOpacity
      style={styles.filledButton}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <H2 style={styles.btnText}>{title}</H2>
    </TouchableOpacity>
  );
}
