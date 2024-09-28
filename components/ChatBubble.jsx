import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const ChatMessage = ({ message, isSent, time }) => {
  const [showTime, setShowTime] = React.useState(false);

  const handlePress = () => {
    setShowTime(!showTime);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
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
        {showTime && <Text style={styles.messageTime}>{time}</Text>}
      </View>
    </TouchableOpacity>
  );
};

const ChatBubble = ({ message, isSent, time }) => {
  return (
    <View style={styles.bubbleContainer}>
      <ChatMessage message={message} isSent={isSent} time={time} />
    </View>
  );
};

const styles = StyleSheet.create({
  bubbleContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 8,
  },
  messageContainer: {
    padding: 12,
    borderRadius: 16,
    marginVertical: 8,
    maxWidth: "80%",
  },
  sentMessage: {
    backgroundColor: "#007bff",
    alignSelf: "flex-end",
  },
  receivedMessage: {
    backgroundColor: "#f2f2f2",
  },
  messageText: {
    color: "white",
    fontSize: 16,
  },
  sentMessageText: {
    color: "black",
  },
  messageTime: {
    color: "#777",
    fontSize: 12,
    marginTop: 4,
  },
});

export default ChatBubble;
