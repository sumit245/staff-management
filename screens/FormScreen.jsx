import React, { useState } from "react";
import { TextInput, ScrollView } from "react-native";
import Button from "../components/buttons/Button";
import { H2 } from "../components/text";
import ContainerComponent from "../components/ContainerComponent";
import MyHeader from "../components/header/MyHeader";
import { styles } from "../styles/components.styles";

const FormScreen = () => {
  const [itemName, setItemName] = useState("");
  const [model, setModel] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [remarks, setRemarks] = useState("");

  const handleSubmit = () => {
    console.log("Form Submitted:");
    console.log({ itemName, model, quantity, price, remarks });
  };

  return (
    <ContainerComponent>
      <ScrollView>
        <MyHeader title="Add Item Details" />

        <H2 style={styles.label}>Item Name</H2>
        <TextInput
          style={styles.input}
          placeholder="Enter Item Name or Specifications"
          value={itemName}
          onChangeText={setItemName}
        />
        <H2 style={styles.label}>Make/Specifications</H2>
        <TextInput
          style={styles.input}
          placeholder="Make Specifications"
          value={itemName}
          onChangeText={setItemName}
        />

        <H2 style={styles.label}>Model</H2>
        <TextInput
          style={styles.input}
          placeholder="Enter Model"
          value={model}
          onChangeText={setModel}
        />

        <H2 style={styles.label}>Quantity</H2>
        <TextInput
          style={styles.input}
          placeholder="Enter Quantity"
          keyboardType="numeric"
          value={quantity}
          onChangeText={setQuantity}
        />

        <H2 style={styles.label}>Tentative Price</H2>
        <TextInput
          style={styles.input}
          placeholder="Enter Tentative Price"
          keyboardType="numeric"
          value={price}
          onChangeText={setPrice}
        />

        <H2 style={styles.label}>Remarks</H2>
        <TextInput
          style={styles.input}
          placeholder="Enter Remarks"
          value={remarks}
          onChangeText={setRemarks}
        />

        <Button style={[styles.btn, styles.bgPrimary]} onPress={handleSubmit}>
          <H2 style={[styles.btnText, styles.textLarge, styles.textLight]}>
            Submit
          </H2>
        </Button>
      </ScrollView>
    </ContainerComponent>
  );
};

export default FormScreen;
