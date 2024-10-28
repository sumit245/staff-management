import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { contactsData } from "../utils/faker";
import { styles, layouts, spacing , typography} from "../styles";
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
      <MyHeader isBack={true} title="Inbox" hasIcon={true} />
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
        <TouchableOpacity style={[styles.rowItem, spacing.pv3, spacing.ph4, { marginBottom: 8 }]}>

            <Avatar
              avatar={item.avatar}
              name={item.name}
              online={item.online}
            />
            <View style={[layouts.flex1, spacing.ml3]}>
              <H4
                style={[
                  typography.textDark,
                  typography.font16,
                  typography.textBold,
                ]}
              >
                {item.name}
              </H4>
              <Span style={typography.font14}>{item.status}</Span>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </ContainerComponent>
  );
}
