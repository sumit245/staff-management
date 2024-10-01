import { styles } from "../../styles/components.styles"
import { TouchableOpacity, } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
const AnimatedFAB = ({ icon, onPress }) => {

  return (
    <TouchableOpacity
      style={[styles.btn, styles.bgPrimary, styles.round, styles.fab]}
      onPress={onPress}
    >
      <Icon style={[styles.textLight]} name={icon} size={32} />
    </TouchableOpacity>
  );
};
export default AnimatedFAB;
