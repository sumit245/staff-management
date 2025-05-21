import { useState } from "react";
import { View } from "react-native";
import ContainerComponent from "../components/ContainerComponent";
import SearchBar from "../components/input/SearchBar";

import Button from "../components/buttons/Button";
import Icon from "react-native-vector-icons/Ionicons";
import { spacing, styles } from "../styles";

import {
  SCREEN_WIDTH,
  PRIMARY_COLOR,
  LIGHT,
  ICON_MEDIUM,
  ICON_LARGE,
} from "../styles";

const ConveyanceManagementScreen = ({ navigation }) => {
  const firstName = "John";
  const [index, setIndex] = useState(0);

  return (
    <ContainerComponent style={{ flex: 1 }}>
      <View
        style={[spacing.mv4, styles.row, spacing.mh1, { alignItems: "center" }]}
      >
        <SearchBar placeholder="Search" style={{ width: SCREEN_WIDTH - 80 }} />
        <Button
          style={[styles.btn, styles.bgPrimary, spacing.mh1, { width: 50 }]}
        >
          <Icon name="options-outline" size={ICON_MEDIUM} color={LIGHT} />
        </Button>
      </View>

      <Button
        style={styles.addButton}
        onPress={() => navigation.navigate("conveyanceBillForm")}
      >
        <Icon name="add" size={ICON_LARGE} color="white" />
      </Button>
    </ContainerComponent>
  );
};

export default ConveyanceManagementScreen;
