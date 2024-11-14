import React from "react";
import { View } from "react-native";
import ContainerComponent from "../components/ContainerComponent";
import MyHeader from "../components/header/MyHeader";

const ReportsScreen = () => {
  return (
    <ContainerComponent>
      <MyHeader title="Reports" isBack={true} hasIcon={true} />
      <View></View>
    </ContainerComponent>
  );
};

export default ReportsScreen;
