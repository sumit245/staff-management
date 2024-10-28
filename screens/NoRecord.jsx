import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ContainerComponent from "../components/ContainerComponent";

const NoRecord = () => {
  return (
    <ContainerComponent>
      <View>
        <Text style={styles.message}>No records found</Text>
      </View>
    </ContainerComponent>
  );
};

const styles = StyleSheet.create({
  message: {
    fontSize: 18,
    color: "#333",
        fontWeight: "bold",
    marginBottom : "90",
  },
});

export default NoRecord;
