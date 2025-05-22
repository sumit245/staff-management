import { View, TouchableOpacity } from "react-native";
import { H4, H5 } from "../text";
import Icon from "react-native-vector-icons/Ionicons";
import { Badge } from "react-native-paper";
import { styles } from "../../styles/components.styles";
import { useNavigation } from "@react-navigation/native";
import { typography, PRIMARY_COLOR, LIGHT } from "../../styles";

export default function MyHeader({
  isBack,
  title,
  hasIcon,
  icon,
  hasBadge,
  badgeCount,
  onIconPress,
  isIconGreen,
}) {
  const navigation = useNavigation();
  return (
    <View style={styles.headerStyle}>
      {isBack && (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ marginRight: 10 }}
        >
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
      )}

      <H4 style={[typography.font18]}>{title}</H4>

      {hasIcon && (
        <TouchableOpacity
          onPress={onIconPress}
          style={{ height: 54, width: 54 }}
        >
          <Icon
            name={icon}
            size={30}
            style={{ position: "absolute", top: 10, left: 14 }}
          />
          {/* {hasBadge && (
            <Badge style={{ position: "absolute", top: 7, right: 7 }}>
              {badgeCount}
            </Badge>
          )} */}

          {hasIcon && (
            <TouchableOpacity
              onPress={onIconPress}
              style={{
                height: 40,
                width: 40,
                backgroundColor: isIconGreen ? PRIMARY_COLOR : "transparent",
                borderRadius: 27,
                justifyContent: "center",
                alignItems: "center",
                top: 8,
                left:12,
              }}
            >
              <Icon name={icon} size={30} color="#ffffff" />
              {hasBadge && <Badge>{badgeCount}</Badge>}
            </TouchableOpacity>
          )}
        </TouchableOpacity>
      )}
    </View>
  );
}
