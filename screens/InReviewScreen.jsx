import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import ContainerComponent from "../components/ContainerComponent";
import { SCREEN_WIDTH, spacing, typography } from "../styles";
import MyHeader from "../components/header/MyHeader";

const reviewsData = [
  {
    id: "1",
    title: "Product A",
    status: "In Review",
    startDate: "2024-01-01",
    endDate: "2024-01-10",
    details: "Detailed review information for Product A.",
  },
  {
    id: "2",
    title: "Product B",
    status: "Approved",
    startDate: "2024-02-01",
    endDate: "2024-02-05",
    details: "This product was approved quickly.",
  },
  {
    id: "3",
    title: "Product C",
    status: "Rejected",
    startDate: "2024-03-01",
    endDate: "2024-03-15",
    details: "Issues found in Product C.",
  },
  {
    id: "4",
    title: "Product D",
    status: "In Review",
    startDate: "2024-04-01",
    endDate: "2024-04-10",
    details: "Pending review for Product D.",
  },
];

const InReviewScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemContent}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.detailsText}>Details: {item.details}</Text>
        <Text style={styles.dateText}>Start Date: {item.startDate}</Text>
        <Text style={styles.dateText}>End Date: {item.endDate}</Text>
      </View>
      <View style={styles.statusContainer}></View>
    </View>
  );

  return (
    <ContainerComponent>
      <View
        style={[
          spacing.mh1,
          {
            width: SCREEN_WIDTH - 16,
          },
        ]}
      >
        <MyHeader title="In Review" isBack={true} hasIcon={true} />
        <FlatList
          data={reviewsData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ContainerComponent>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  itemContent: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
  },
  detailsText: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
  },
  dateText: {
    fontSize: 14,
    color: "#777",
    marginBottom: 5,
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusText: {
    fontSize: 14,
    marginRight: 5,
    color: "#555",
  },
});

export default InReviewScreen;
