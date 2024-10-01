
import { View, Text } from "react-native";
import { styles } from "../styles/components.styles";

export default function ChatBubble({ message, isSent, time }) {
  return (
    <View
      style={[
        styles.messageContainer,
        isSent ? styles.sentMessage : styles.receivedMessage,
      ]}
    >
      <Text
        style={[
          styles.messageText,
          isSent ? styles.sentMessageText : styles.receivedMessageText,
        ]}
      >
        {message}
      </Text>
      <Text style={styles.messageTime}>{time}</Text>
    </View>
  );
};



