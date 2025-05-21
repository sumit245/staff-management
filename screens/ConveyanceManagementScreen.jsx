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
  const [index, setIndex] = useState(0);

  return (
    <ContainerComponent style={{ flex: 1 }}>
      {/* Search bar and filter icon */}
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

      {/* Floating Add Button with Large Bold Icon */}
      <Button
        style={[
          {
            position: "absolute",
            right: 20,
            bottom: 30,
            width: 60,
            height: 60,
            borderRadius: 30,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: PRIMARY_COLOR,
            elevation: 6,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
          },
        ]}
        onPress={() => navigation.navigate("conveyancebill")}
      >
        <Icon name="add" size={ICON_LARGE + 10} color="black" />
      </Button>
    </ContainerComponent>
  );
};

export default ConveyanceManagementScreen;
