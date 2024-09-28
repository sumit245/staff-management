// src/screens/ChatScreen.js
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
  TextInput,
  Text,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import ChatBubble from "../components/ChatBubble";
import Audio from "../components/Audio";

import { dummyMessages } from "../utils/faker"; // Importing the dummy data
import { styles } from "../styles/components.styles";

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
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={20} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Athalia Putri</Text>
        <TouchableOpacity style={styles.searchButton}>
          <Ionicons name="search" size={20} color="black" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.chatContainer}>
        <FlatList
          data={messages}
          renderItem={({ item }) => (
            <ChatBubble
              message={item.message}
              isSent={item.isSent}
              time={item.time}
            />
          )}
          keyExtractor={(item) => item.id}
          inverted
        />
      </ScrollView>

      {/* Add Audio Component here */}
      <Audio />

      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={44} color="black" />
        </TouchableOpacity>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Type your message"
            value={message}
            onChangeText={(text) => setMessage(text)}
          />
        </View>
        <TouchableOpacity
          style={styles.sendButton}
          onPress={() => handleSendMessage(message)}
        >
          <Ionicons name="send" size={44} color="#007bff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ChatScreen;
