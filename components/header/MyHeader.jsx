import { View } from "react-native";
import { H2, H3, H4, H6 } from "../text";

import Icon from "react-native-vector-icons/Ionicons";
import { Badge } from "react-native-paper";
import { styles } from "../../styles/components.styles";

export default function MyHeader({
  isBack,
  title,
  hasIcon,
  icon,
  hasBadge,
  badgeCount,
}) {
  return (
    <View style={styles.headerStyle}>
      {isBack && (
        <View style={{ height: 54, width: 54 }}>
          <Icon
            name="arrow-back"
            size={30}
            style={{ position: "absolute", top: 10, left: 4 }}
          />
        </View>
      )}
      <H3 style={styles.titleText}>{title}</H3>
      {hasIcon && (
        <View style={{ height: 54, width: 54 }}>
          <Icon
            name={icon}
            size={30}
            style={{ position: "absolute", top: 10, left: 14 }}
          />
          {hasBadge && (
            <Badge style={{ position: "absolute", top: 7, right: 7 }}>
              {badgeCount}
            </Badge>
          )}
        </View>
      )}
    </View>
  );
}
