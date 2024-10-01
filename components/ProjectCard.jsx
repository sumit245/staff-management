import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ContainerComponent from "./ContainerComponent";
import CardHeader from "./CardHeader";
import StatusRow from "./StatusRow";
import PrimaryButton from "./buttons/PrimaryButton";

export default function ProjectCard({ title, icon, status }) {
  return (
    <ContainerComponent>
      <View style={styles.card}>
        <CardHeader title={title} icon={icon} />

        <View style={styles.cardContent}>
          <StatusRow numbers={status.numbers} />

          <StatusRow labels={status.labels} />

          <View style={styles.buttonContainer}>
            <PrimaryButton
              title="Progression"
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
  cardContent: {
    fontSize: 16,
    color: "#666",
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 60,
  },
});
