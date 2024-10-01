import { View, Text } from "react-native";
import { styles } from "../styles/components.styles";
import { H5 } from "./text";

const renderItem = (item) => (
  <View style={styles.itemContainer}>
    <H5 style={styles.textLight}>{item.title}</H5>
  </View>
);

const ContainerList = ({ data }) => {

  return (
    <View style={[styles.fullWidth, { paddingHorizontal: 4 }]}>
      {data.map((item) => renderItem(item))}
    </View>
  );
};
export default ContainerList;
