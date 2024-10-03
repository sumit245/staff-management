import React, { useState } from "react";
import { View, TouchableOpacity, FlatList } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import ChatBubble from "../components/ChatBubble";
import { dummyMessages } from "../utils/faker"; // Importing the dummy data
import { styles } from "../styles/components.styles";
import ContainerComponent from "../components/ContainerComponent";
import MyHeader from "../components/header/MyHeader";
import { LIGHT } from "../styles/constant";
import EllipticalInput from "../components/input/EllipticalInput";

const ChatScreen = () => {
  const [messages, setMessages] = useState(dummyMessages); // Using dummy data
  const [message, setMessage] = useState("");

  const handleSendMessage = (message) => {
    if (message.trim()) {
      setMessages([
        ...messages,
        { id: `${messages.length + 1}`, message, isSent: true, time: "16.50" },
      ]);
      setMessage(""); // Clear the input after sending
    }
  };

  return (
    <ContainerComponent>
      <MyHeader title="Mihir" isBack={true} hasIcon={true} icon={"search-outline"} />
      {/* Chat body here */}
      <FlatList
        data={messages}
        style={[styles.bgPrimaryTransParent, styles.fullWidth, { paddingHorizontal: 4 }]}
        renderItem={({ item }) => (
          <ChatBubble
            message={item.message}
            isSent={item.isSent}
            time={item.time}
          />
        )}
        keyExtractor={(item) => item.id}
      />

      {/* Chat Footer here */}
      <View style={[styles.row, styles.bottom, styles.fullWidth, { alignItems: 'center', paddingHorizontal: 4 }]}>
        <TouchableOpacity style={[styles.btn, styles.round, styles.border, { width: 48, height: 48 }]}>
          <Ionicons name="add" size={32} color="black" />
        </TouchableOpacity>
        <EllipticalInput placeholder="Type a message" onChangeText={setMessage} value={message} />

        <TouchableOpacity
          style={[styles.btn, styles.round, styles.bgInfo, { width: 48, height: 48, justifyContent: "flex-end" }]}
          onPress={() => handleSendMessage(message)}
        >
          <Ionicons name="send" size={28} color={LIGHT} />
        </TouchableOpacity>
      </View>
    </ContainerComponent>
  );
};
export default ChatScreen;
