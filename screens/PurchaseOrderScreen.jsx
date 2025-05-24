import React, { useState, useEffect } from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import Button from "../components/buttons/Button";
import ContainerComponent from "../components/ContainerComponent";
import MyHeader from "../components/header/MyHeader";
import { styles } from "../styles/components.styles";
import { itemsData } from "../utils/faker";
import { H2, P } from "../components/text";
import { useNavigation } from "@react-navigation/native";
import SearchBar from "../components/input/SearchBar";
import { PRIMARY_COLOR, spacing, typography } from "../styles";
import ClickableCard1 from "../components/card/clickableCard";

const PurchaseOrderScreen = () => {
  const [items, setItems] = useState([]);

  const [filteredItems, setFilteredItems] = useState(itemsData);
  const [searchQuery, setSearchQuery] = useState("");
  const navigation = useNavigation(); // Hook to navigate

  // Function to handle search query and filter items
  const handleSearch = (text) => {
    setSearchQuery(text);
    if (text === "") {
      setFilteredItems(itemsData);
    } else {
      const filtered = itemsData.filter(
        (item) =>
          item.id.toLowerCase().includes(text.toLowerCase()) ||
          item.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredItems(filtered);
    }
  };

  const route = useRoute();

  useEffect(() => {
    if (route.params?.newItem) {
      setItems((prevItems) => [...prevItems, route.params.newItem]);
    }
  }, [route.params?.newItem]);

  const navigateToFormScreen = () => {
    navigation.navigate("formScreen");
  };

  return (
    <ContainerComponent>
      <MyHeader title="Manage Purchase Orders" isBack={true} hasIcon={true} />
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }}>
        <SearchBar
          placeholder="Search Project Code or Name"
          value={searchQuery}
          onChangeText={handleSearch}
          style={[{ marginTop: 12 }]}
        />

        {items.map((item, index) => (
          <ClickableCard1
            key={index}
            title={item.materialName}
            subtitle={`Qty: ${item.quantity} ${item.unit}`}
          >
            <P>Specifications: {item.specifications}</P>
            <P>Model: {item.model}</P>
            <View style={{ alignItems: "flex-end" }}>
              <P>{new Date(item.targetDate).toDateString()}</P>
            </View>
            {item.remarks ? <P>Remarks: {item.remarks}</P> : null}
          </ClickableCard1>
        ))}
      </ScrollView>

      {/* Floating Button */}
      <TouchableOpacity
        onPress={navigateToFormScreen}
        style={[
          spacing.br2,
          {
            position: "absolute",
            bottom: 120,
            right: 20,
            backgroundColor: PRIMARY_COLOR,
            width: 140,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
        <View style={[styles.row]}>
          <P style={[typography.font20, spacing.mr1, { color: "white" }]}>+</P>
          <P style={[typography.font16, { color: "white" }]}>New Material</P>
        </View>
      </TouchableOpacity>

      {/* Fixed Bottom Button */}
      <Button
        style={[
          styles.btn,
          styles.bgPrimary,
          {
            justifyContent: "center",
            position: "absolute",
            bottom: 28,
            left: 16,
            right: 16,
          },
        ]}
        // onPress={navigateToFormScreen}
      >
        <H2 style={[styles.btnText, styles.textLarge, typography.textLight]}>
          Create Purchase Order
        </H2>
      </Button>
    </ContainerComponent>
  );
};

export default PurchaseOrderScreen;
