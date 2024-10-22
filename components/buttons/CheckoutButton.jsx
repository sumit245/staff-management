import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { styles } from "../../styles/components.styles";
import { H4 } from "../text";

const CheckoutButton = ({
  onPress,
  text ,
  icon ,
  size ,
  color ,
}) => {
  return (
    <TouchableOpacity style={styles.checkoutButton} onPress={onPress}>
      <Icon name={icon} size={size} color={color} />
      <H4 style={styles.checkoutText}>{text}</H4>
    </TouchableOpacity>
  );
};

export default CheckoutButton;
