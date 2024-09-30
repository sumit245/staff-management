import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/components.styles";
import { dummyData } from "../utils/faker";
const ContainerList = () => {
  const renderItem = (item) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.title}</Text>
    </View>
  );
  return (
    <View style={styles.screenContainer}>
      {dummyData.map((item) => renderItem(item))}
    </View>
  );
};
export default ContainerList;
