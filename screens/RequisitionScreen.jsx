import React, { useState } from "react";
import { Checkbox } from "react-native-paper";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import ContainerComponent from "../components/ContainerComponent";
import { requisitions } from "../utils/faker";
import SearchBar from "../components/input/SearchBar";
import MyHeader from "../components/header/MyHeader";
import Button from "../components/buttons/Button";
import { styles } from "../styles/components.styles";
import { H1, H4, H5, H6, P } from "../components/text";

const RequisitionScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [requisitionList, setRequisitionList] = useState(requisitions);

  const handleToggleCheck = (index) => {
    const updatedRequisitions = [...requisitionList];
    updatedRequisitions[index].checked = !updatedRequisitions[index].checked;
    setRequisitionList(updatedRequisitions);
  };

  const handleActionPress = (id) => {
    console.log(`Action button pressed for requisition ${id}`);
  };

  return (
    <ContainerComponent>
      <View>
        <MyHeader
          isBack={true}
          title="Requisitions For Release"
          hasIcon={true}
          icon="notifications"
          hasBadge={true}
          badgeCount={3}
        />

        <SearchBar
          placeholder="Search requisitions"
          value={searchText}
          onChangeText={setSearchText}
        />

        <ScrollView>
          {requisitionList.map((item, index) => (
            <ListItem
              key={index}
              id={item.id}
              location={item.location}
              date={item.date}
              amount={item.amount}
              checked={item.checked}
              onToggle={() => handleToggleCheck(index)}
              onActionPress={() => handleActionPress(item.id)}
            />
          ))}
        </ScrollView>

        <Button style={[styles.btn, styles.bgPrimary]}>
          <H4 style={[styles.btnText, styles.textLarge, styles.textLight]}>
            Create Receipt
          </H4>
        </Button>
      </View>
    </ContainerComponent>
  );
};

const ListItem = ({
  id,
  location,
  date,
  amount,
  checked,
  onToggle,
  onActionPress,
}) => {
  return (
    <View style={styles.listItemContainer}>
      <View style={styles.leftContainer}>
        <Checkbox
          status={checked ? "checked" : "unchecked"}
          onPress={onToggle}
          color="#2b87b0"
        />
        <View style={styles.textContainer}>
          <H5>{id}</H5>
          <P>{location}</P>
        </View>
      </View>

      <View style={styles.rightContainer}>
        <H6>{date}</H6>
        <H5>{amount}</H5>
        <TouchableOpacity style={styles.actionButton} onPress={onActionPress}>
          <Text style={styles.actionButtonText}>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RequisitionScreen;
