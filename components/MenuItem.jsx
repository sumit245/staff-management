import { TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { H5 } from './text'
import { typography, styles, spacing } from "../styles";

export default function MenuItem({ label, icon, onPress }) {
  return (
    <TouchableOpacity style={[styles.rowItem, spacing.ph1, spacing.mh2]} onPress={onPress}>
      <View style={styles.rowBullet}>
        <Icon name={icon} size={24} style={typography.textDark} />
        <H5 style={[typography.textDark, spacing.ph2]}>{label}</H5>
      </View>
      <Icon name="chevron-forward-outline" size={24} color="#333" />
    </TouchableOpacity>
  );
}
