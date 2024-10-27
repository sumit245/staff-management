import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { contactsData } from "../utils/faker";
import { styles, layouts } from "../styles";
import ContainerComponent from "./ContainerComponent";
import SearchBar from "./input/SearchBar";
import Avatar from "./Avatar";
import { H4, Span } from "./text";
import MyFlatList from '../components/utility/MyFlatList'
import MyHeader from '../components/header/MyHeader'
import AnimatedFAB from "../components/buttons/AnimatedFAB";

export default function ContactList() {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (text) => {
    setSearchText(text);
  };

  return (
    <ContainerComponent>

      <MyHeader isBack={true} title="Contacts" hasIcon={true} icon="add-outline" />
      <SearchBar
        placeholder="Search"
        value={searchText}
        onChangeText={handleSearch}
      />

      <MyFlatList
        data={contactsData.filter((item) =>
          item.name.toLowerCase().includes(searchText.toLowerCase())
        )}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.rowItem}>
            <Avatar avatar={item.avatar} name={item.name} online={item.online} />
            <View style={layouts.flex1}>
              <H4 style={[styles.textDark, { fontWeight: 'bold', fontSize: 18 }]}>{item.name}</H4>
              <Span>{item.status}</Span>
            </View>
          </TouchableOpacity>)}
        keyExtractor={(item) => item.id}
      />
      <AnimatedFAB icon='add-outline' />

    </ContainerComponent>
  );
}
