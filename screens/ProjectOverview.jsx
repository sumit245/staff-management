import React from "react";
import { Text, View, StyleSheet } from "react-native";
import MyHeader from "../components/header/MyHeader";
import ContainerComponent from "../components/ContainerComponent";
import PrimaryButton from "../components/buttons/PrimaryButton";
import { Ionicons } from "@expo/vector-icons";

export default function ProjectOverview() {
  return (
    <ContainerComponent>
      <MyHeader
        title="Dashboard"
        hasIcon={true}
        icon="notifications-outline"
        badgeCount={1}
      />
      <View style={styles.card}>
        <View style={styles.cardHeadingContainer}>
          <Ionicons
            name="briefcase"
            size={24}
            color="#333"
            style={styles.icon}
          />
          <Text style={styles.cardHeading}>Project Overview</Text>
        </View>

        <View style={styles.cardContent}>
          <View style={styles.row}>
            <Text style={styles.number}>1</Text>
            <Text style={styles.number}>2</Text>
            <Text style={styles.number}>3</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.textUp}>Open</Text>
            <Text style={styles.textUp}>Hold</Text>
            <Text style={styles.textUp}>Complete</Text>
          </View>

          <View style={styles.buttonContainer}>
            <PrimaryButton
              title="Progression 100%"
              buttonStyle={{ backgroundColor: "#FF5733" }}
              textStyle={{ fontSize: 12 }}
              onPress={() => alert("Button pressed!")}
            />
          </View>
        </View>
      </View>
    </ContainerComponent>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    margin: 15,
    width: "90%",
    height: 300,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
    alignSelf: "center",
  },
  cardHeadingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardHeading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginLeft: 10,
  },
  icon: {},
  cardContent: {
    fontSize: 16,
    color: "#666",
    marginTop: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  number: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    width: 60,
  },
  textUp: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    width: 80,
    height: 30,
  },
  buttonContainer: {
    marginTop: 60,
  },
});
