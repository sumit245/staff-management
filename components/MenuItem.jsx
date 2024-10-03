import { TouchableOpacity, View } from "react-native";
import { styles } from "../styles/components.styles";
import Icon from "react-native-vector-icons/Ionicons";
import { H5 } from './text'

export default function MenuItem({ label, icon, onPress }) {
  return (
    <TouchableOpacity style={[styles.rowItem, styles.ph1, styles.mh2]} onPress={onPress}>
      <View style={styles.rowBullet}>
        <Icon name={icon} size={24} style={styles.textDark} />
        <H5 style={[styles.textDark, styles.ph2]}>{label}</H5>
      </View>
      <Icon name="chevron-forward-outline" size={24} color="#333" />
    </TouchableOpacity>
  );
}
