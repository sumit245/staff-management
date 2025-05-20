import { View, TextInput } from "react-native";
import { Span } from "../text";
import {
  spacing,
  styles,
  SCREEN_WIDTH,
  typography,
  PRIMARY_COLOR,
} from "../../styles";

export default function MyTextInput({ title, onChangeText, type, ...props }) {
  return (
    <View style={spacing.mb2}>
      <Span style={[typography.font12]}>{title}</Span>

      <TextInput
        onChangeText={onChangeText}
        keyboardType={type}
        style={[
          styles.textInputField,
          spacing.mv1,
          spacing.pl3,
          { width: SCREEN_WIDTH - 28 },
        ]}
        cursorColor={PRIMARY_COLOR}
        title
        value
        icon
        {...props}
      />
    </View>
  );
}
