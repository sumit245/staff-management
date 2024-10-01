import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ContactItem from "./ContactItem";
import { contactsData } from "../utils/faker";
import { styles } from "../styles/components.styles";
import ContainerComponent from "./ContainerComponent";
import SearchBar from "./SearchBar";

export default function ContactList() {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (text) => {
    setSearchText(text);
  };

  return (
    <ContainerComponent>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Contacts</Text>
          <TouchableOpacity>
            <Ionicons name="add" size={24} color="#333" />
          </TouchableOpacity>
        </View>

        <SearchBar
          placeholder="Search"
          value={searchText}
          onChangeText={handleSearch}
        />

        <FlatList
          data={contactsData.filter((item) =>
            item.name.toLowerCase().includes(searchText.toLowerCase())
          )}
          renderItem={({ item }) => <ContactItem item={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ContainerComponent>
  );
}
