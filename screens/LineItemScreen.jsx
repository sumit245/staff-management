import React from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import { Card } from "react-native-paper";
import { Icon } from "react-native-elements";
import ContainerComponent from "../components/ContainerComponent";
import MyHeader from "../components/header/MyHeader";
import Button from "../components/buttons/Button";
import { styles } from "../styles/components.styles";
import { lineItems } from "../utils/faker";
import { H1, H2, H4, H5, H6, P } from "../components/text";

const LineItemScreen = () => {
  return (
    <ContainerComponent>
      <View>
        <MyHeader title="14642" isBack={true} hasIcon={true} />

        <ScrollView contentContainerStyle={styles.scrollView}>
          <H4 style={styles.sectionTitle}>LINE ITEMS</H4>

          {lineItems.map((item, index) => (
            <Card style={styles.card} key={index}>
              <View style={styles.cardContent}>
                <Icon name="description" size={40} color="#2b87b0" />
                <View style={styles.itemDetails}>
                  <H5 style={styles.itemId}>{item.id}</H5>
                  <P>{item.description}</P>
                  <H6 style={styles.location}>Location: {item.location}</H6>
                  <P style={styles.subInventory}>
                    Sub Inventory: {item.subInventory}
                  </P>
                </View>
              </View>

              <View style={styles.quantityRow}>
                <H6>Quantity Received</H6>
                <TextInput
                  style={styles.input}
                  placeholder="Enter quantity"
                  keyboardType="numeric"
                />
                <Text style={styles.unit}>Ea</Text>
              </View>
            </Card>
          ))}

          <Button style={[styles.saveButton]}>
            <Text style={[styles.btnText, styles.textLarge, styles.textBlack]}>
              Save Draft
            </Text>
          </Button>

          <Button style={[styles.btn, styles.bgPrimary]}>
            <H2 style={[styles.btnText, styles.textLarge, styles.textLight]}>
              Create Receipt
            </H2>
          </Button>
        </ScrollView>
      </View>
    </ContainerComponent>
  );
};

export default LineItemScreen;
