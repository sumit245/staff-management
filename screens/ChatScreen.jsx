import React, { useState } from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import ChatBubble from "../components/ChatBubble";
import ContainerComponent from "../components/ContainerComponent";
import MyHeader from "../components/header/MyHeader";
import EllipticalInput from "../components/input/EllipticalInput";
import MyFlatList from "../components/utility/MyFlatList";
import { layouts, spacing, styles, LIGHT, SCREEN_HEIGHT } from "../styles";
import { dummyMessages } from "../utils/faker"; // Importing the dummy data

const ChatScreen = () => {
  const [messages, setMessages] = useState(dummyMessages); // Using dummy data
  const [message, setMessage] = useState("");

  const handleSendMessage = (message) => {
    if (message.trim()) {
      setMessages([
        ...messages,
        { id: `${messages.length + 1}`, message, isSent: true, time: "16.50" },
      ]);
      setMessage(""); 
    }
  };

  return (
    <ContainerComponent>
      <MyHeader title="Sumit Ranjan" isBack={true} hasIcon={true} icon={"search-outline"} />
      <ScrollView style={{ flex: 1 }}>
        {/* Chat body here */}
        <MyFlatList
          data={messages}
          style={[styles.bgPrimaryTransParent, styles.fullWidth, { paddingHorizontal: 4, }]}
          contentContainerStyle={{ height: SCREEN_HEIGHT - 280 }}
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
        <View style={[styles.row, styles.fullWidth, styles.bgLight, spacing.ph1, { alignItems: 'center', }]}>
          <TouchableOpacity style={[styles.btn, styles.border, layouts.circle12]}>
            <Ionicons name="add" size={32} color="black" />
          </TouchableOpacity>
          <EllipticalInput
            placeholder="Type a message"
            onChangeText={setMessage}
            value={message} />

          <TouchableOpacity
            style={[styles.btn, styles.bgInfo, layouts.circle12, { justifyContent: 'flex-end' }]}
            onPress={() => handleSendMessage(message)}
          >
            <Ionicons name="send" size={28} color={LIGHT} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ContainerComponent>
  );
};
export default ChatScreen;
