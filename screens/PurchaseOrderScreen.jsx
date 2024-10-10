import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { CheckBox } from "react-native-elements";
import { Card } from "react-native-paper";
import { Icon } from "react-native-elements";
import Button from "../components/buttons/Button";
import ContainerComponent from "../components/ContainerComponent";
import MyHeader from "../components/header/MyHeader";
import { styles } from "../styles/components.styles";
import { itemsData, amountDetailsData } from "../utils/faker";
import { H2, H3, H4, H5, H6, P } from "../components/text";

const PurchaseOrderScreen = () => {
  const [checkedItems, setCheckedItems] = useState({});
  const [items, setItems] = useState(itemsData);

  const toggleCheck = (itemId) => {
    setCheckedItems({
      ...checkedItems,
      [itemId]: !checkedItems[itemId],
    });
  };

  return (
    <ContainerComponent>
      <ScrollView>
        <MyHeader title="Line Items" hasIcon={true} icon={"trash-outline"} />

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
            <View style={[styles.addIconContainer, { marginLeft: 15 }]}>
              <Icon name="add" size={20} color="#020409" />
            </View>
          </View>
        </Button>

        {items.map((item) => (
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
        ))}

        <Card style={styles.amountCard}>
          {amountDetailsData.map((detail, index) => (
            <View key={index} style={styles.amountDetails}>
              <H6 style={styles.label}>{detail.label}</H6>
              <P>
                {typeof detail.value === "number"
                  ? detail.value.toFixed(2)
                  : detail.value}
              </P>
            </View>
          ))}
        </Card>

        <Button style={[styles.btn, styles.bgPrimary]}>
          <H2 style={[styles.btnText, styles.textLarge, styles.textLight]}>
            Create Purchase Order
          </H2>
        </Button>
      </ScrollView>
    </ContainerComponent>
  );
};

export default PurchaseOrderScreen;
