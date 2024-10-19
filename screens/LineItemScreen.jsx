import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Card } from "react-native-paper";
import CustomCheckbox from "../components/input/CustomCheckbox";
import ContainerComponent from "../components/ContainerComponent";
import MyHeader from "../components/header/MyHeader";

const LineItemScreen = () => {
  const [checkedItems, setCheckedItems] = useState({});
  const [items, setItems] = useState([
    {
      id: "AS1001",
      name: "HP Deskjet 1010 Color Inkjet Printer",
      price: 15.0,
      quantity: 2,
      total: 30.0,
    },
    {
      id: "AS1002",
      name: "Logitech B100 Optical Wired USB Mouse",
      price: 8.0,
      quantity: 6,
      total: 48.0,
    },
  ]);

  const toggleCheck = (itemId) => {
    setCheckedItems({
      ...checkedItems,
      [itemId]: !checkedItems[itemId],
    });
  };

    return (
      <ContainerComponent>
        <ScrollView>
          {/* Header Section */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Line Items</Text>
            <TouchableOpacity style={styles.deleteButton}>
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>

          {/* Add New Line Item Button */}
          <TouchableOpacity style={styles.addNewButton}>
            <Text style={styles.addNewButtonText}>Add New Line Item</Text>
          </TouchableOpacity>

          {/* Line Items */}
          {items.map((item, index) => (
            <Card key={index} style={styles.card}>
              <View style={styles.cardRow}>
                <CustomCheckbox
                  label=""
                  onChange={() => toggleCheck(item.id)}
                  isChecked={checkedItems[item.id] || false} // Custom prop to handle check state
                />
                <View style={styles.itemInfo}>
                  <Text style={styles.itemId}>{item.id}</Text>
                  <Text>{item.name}</Text>
                </View>
                <View style={styles.itemDetails}>
                  <Text>${item.price.toFixed(2)}</Text>
                  <Text>{item.quantity} Ea</Text>
                  <Text>${item.total.toFixed(2)}</Text>
                </View>
              </View>
            </Card>
          ))}

          {/* Amount Details */}
          <Card style={styles.amountCard}>
            <View style={styles.amountDetails}>
              <Text style={styles.label}>Amount</Text>
              <Text>78.00</Text>
            </View>
            <View style={styles.amountDetails}>
              <Text style={styles.label}>Tax</Text>
              <Text>2.00</Text>
            </View>
            <View style={styles.amountDetails}>
              <Text style={styles.label}>Freight</Text>
              <Text>2.00</Text>
            </View>
            <View style={styles.amountDetails}>
              <Text style={styles.label}>Currency</Text>
              <Text>USD</Text>
            </View>
            <View style={styles.amountDetails}>
              <Text style={styles.label}>Grand Total</Text>
              <Text>82.00</Text>
            </View>
          </Card>

          {/* Purchase Order Button */}
          <TouchableOpacity style={styles.createOrderButton}>
            <Text style={styles.createOrderButtonText}>
              Create Purchase Order
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </ContainerComponent>
    );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f9f9f9",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  deleteButton: {
    backgroundColor: "#ff6666",
    padding: 8,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: "#fff",
  },
  addNewButton: {
    backgroundColor: "#3498db",
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  addNewButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
  card: {
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemInfo: {
    flex: 2,
    marginLeft: 10,
  },
  itemId: {
    fontWeight: "bold",
  },
  itemDetails: {
    flex: 1,
    alignItems: "flex-end",
  },
  amountCard: {
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  amountDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  label: {
    fontWeight: "bold",
  },
  createOrderButton: {
    backgroundColor: "#27ae60",
    padding: 15,
    borderRadius: 5,
  },
  createOrderButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
});

export default LineItemScreen;
