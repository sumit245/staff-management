import React, { useState } from "react";
import { View, Text, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { CheckBox } from "react-native-elements";
import { Card } from "react-native-paper";
import { Icon } from "react-native-elements";
import Button from "../components/buttons/Button";
import ContainerComponent from "../components/ContainerComponent";
import MyHeader from "../components/header/MyHeader";
import { styles } from "../styles/components.styles";
import { itemsData, amountDetailsData } from "../utils/faker";
import { H2, H5, H6, P } from "../components/text";

import { useNavigation } from "@react-navigation/native";

const PurchaseOrderScreen = () => {
  const [checkedItems, setCheckedItems] = useState({});
  const [items, setItems] = useState(itemsData);
  const [filteredItems, setFilteredItems] = useState(itemsData);
  const [searchQuery, setSearchQuery] = useState("");
  const navigation = useNavigation();

  // Function to toggle checkbox
  const toggleCheck = (itemId) => {
    setCheckedItems({
      ...checkedItems,
      [itemId]: !checkedItems[itemId],
    });
  };

  // Function to handle search query and filter items based on product code
  const handleSearch = (text) => {
    setSearchQuery(text);

    if (text === "") {
      setFilteredItems(itemsData); // Reset to all items if search query is cleared
    } else {
      const filtered = itemsData.filter(
        (item) =>
          item.id.toLowerCase().includes(text.toLowerCase()) || // Search by product code
          item.name.toLowerCase().includes(text.toLowerCase()) // Search by product name
      );
      setFilteredItems(filtered);
    }
  };

  const navigateToFormScreen = () => {
    navigation.navigate("FormScreen"); // Navigate to the FormScreen
  };

  return (
    <ContainerComponent>
      <ScrollView>
        <MyHeader
          title="Select Project Code"
          isBack={true}
          hasIcon={true}
          icon={"trash-outline"}
        />

        <View style={{ marginVertical: 10, paddingHorizontal: 10 }}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search by Project Code or Name"
            value={searchQuery}
            onChangeText={handleSearch}
          />
        </View>

        {/* Button to Add New Line Item */}
        <Button style={[styles.btn, styles.bgPrimary]}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              flex: 1,
            }}
          >
            <H2 style={[styles.btnText, styles.textLarge, styles.textLight]}>
              Add New Line Item
            </H2>
            <TouchableOpacity
              onPress={navigateToFormScreen}
              style={[styles.addIconContainer, { marginLeft: 150 }]}
            >
              <Icon name="add" size={20} color="#020409" />
            </TouchableOpacity>
          </View>
        </Button>

        {/* Display filtered items based on search */}
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <Card key={item.id} style={styles.card}>
              <View style={styles.cardRow}>
                <CheckBox
                  checked={checkedItems[item.id] || false}
                  onPress={() => toggleCheck(item.id)}
                  style={{ marginLeft: -15 }}
                />
                <View style={styles.itemInfo}>
                  <H5>{item.id}</H5>
                  <P>{item.name}</P>
                </View>
                <View style={styles.itemDetails}>
                  <H6>₹{item.price.toFixed(2)}</H6>
                  <P>{item.quantity} Ea</P>
                  <H5>₹{item.total.toFixed(2)}</H5>
                </View>
              </View>
            </Card>
          ))
        ) : (
          <Text>No products found</Text>
        )}

        <Card style={styles.amountCard}>
          {amountDetailsData.map((detail, index) => (
            <View
              key={index}
              style={[styles.amountDetails, { paddingRight: 10 }]}
            >
              <H6 style={styles.label}>{detail.label}</H6>
              <P>
                {typeof detail.value === "number"
                  ? detail.value.toFixed(2)
                  : detail.value}
              </P>
            </View>
          ))}
        </Card>

        <Button
          style={[styles.btn, styles.bgPrimary, { justifyContent: "center" }]}
          // onPress={onSubmit}
        >
          <H2 style={[styles.btnText, styles.textLarge, styles.textLight]}>
            Create Purchase Order
          </H2>
        </Button>
      </ScrollView>
    </ContainerComponent>
  );
};

export default PurchaseOrderScreen;
