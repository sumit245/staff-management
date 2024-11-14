import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ContainerComponent from "../components/ContainerComponent";
import MyHeader from "../components/header/MyHeader";

const NoRecord = () => {
  return (
    <ContainerComponent>
      <MyHeader title="Project overview" isBack={true} hasIcon={true} />
      <View style={styles.container}>
        <Text style={styles.message}>No records found</Text>
      </View>
    </ContainerComponent>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  message: {
    fontSize: 18,
    color: "#333",
    fontWeight: "bold",
  },
});

export default NoRecord;
