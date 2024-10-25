
import { View } from "react-native";
import { layouts, spacing, styles, typography } from "../styles";
import { P, Span } from "./text";

export default function ChatBubble({ message, isSent, time }) {
  return (
    <View
      style={[
        spacing.p3,
        spacing.mv2,
        spacing.br3,
        isSent ? [styles.bgPrimary, layouts.selfEnd] : [styles.bgSecondary, layouts.selfStart]
      ]}
    >
      <P
        style={[
          typography.textLight
        ]}
      >
        {message}
      </P>
      <Span style={[spacing.pv1, typography.textLight]}>{time}</Span>
    </View>
  );
};



