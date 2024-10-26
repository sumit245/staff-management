import React, { useState } from "react";
import { ScrollView, View, TextInput } from "react-native";
import Button from "../components/buttons/Button";
import { H2, H4, H5, H6 } from "../components/text";
import ContainerComponent from "../components/ContainerComponent";
import MyHeader from "../components/header/MyHeader";
import SearchableDropdown from "../components/SearchableDropdown";
import SearchBar from "../components/input/SearchBar";
import { styles } from "../styles/components.styles";
import {  spacing } from "../styles";

const FormScreen = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [model, setModel] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [remarks, setRemarks] = useState("");

  const handleSubmit = () => {
    console.log("Form Submitted:");
    console.log({
      selectedItem,
      model,
      quantity,
      price,
      remarks,
    });
  };

  return (
    <ContainerComponent>
      <ScrollView>
        <MyHeader
          title="Add Item Details"
          isBack={true}
          hasIcon={true}
          icon={""}
        />

        <H5 style={spacing.mb3}>Search Item</H5>
        <View
          style={{
            borderWidth: 1,
            borderColor: "#020409",
            backgroundColor: "#f9f9f9",
            paddingHorizontal: 2,
            borderRadius: 5,
          }}
        >
          <SearchableDropdown onItemSelect={(item) => setSelectedItem(item)} />
        </View>

        <H5 style={spacing.mb3}>Make/Specifications</H5>
        <TextInput
          style={styles.input}
          placeholder="Make Specifications"
          value={model}
          onChangeText={setModel}
        />

        <H5 style={spacing.mb3}>Model</H5>
        <TextInput
          style={styles.input}
          placeholder="Enter Model"
          value={model}
          onChangeText={setModel}
        />

      
        <H5 style={spacing.mb3}>Quantity</H5>
        <TextInput
          style={styles.input}
          placeholder="Enter Quantity"
          keyboardType="numeric"
          value={quantity}
          onChangeText={setQuantity}
        />

        <H5 style={spacing.mb3}>Tentative Price</H5>
        <TextInput
          style={styles.input}
          placeholder="Enter Tentative Price"
          keyboardType="numeric"
          value={price}
          onChangeText={setPrice}
        />

        <H5 style={spacing.mb3}>Remarks</H5>
        <TextInput
          style={styles.input}
          placeholder="Enter Remarks"
          value={remarks}
          onChangeText={setRemarks}
        />

        <Button
          style={[styles.btn, styles.bgPrimary, { justifyContent: "center" }]}
        >
          <H2 style={[styles.btnText, styles.textLarge, styles.textLight]}>
            Submit
          </H2>
        </Button>
      </ScrollView>
    </ContainerComponent>
  );
};

export default FormScreen;
