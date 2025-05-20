import { useState } from "react";
import { Checkbox } from "react-native-paper";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import ContainerComponent from "../components/ContainerComponent";
import { requisitions } from "../utils/faker";
import SearchBar from "../components/input/SearchBar";
import MyHeader from "../components/header/MyHeader";
import Button from "../components/buttons/Button";
import { styles } from "../styles/components.styles";
import { H2, H5, H6, P } from "../components/text";
import { PRIMARY_COLOR, SCREEN_WIDTH, spacing, typography } from "../styles";

const RequisitionScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const [requisitionList, setRequisitionList] = useState(requisitions);

  const handleToggleCheck = (index) => {
    const updatedRequisitions = [...requisitionList];
    updatedRequisitions[index].checked = !updatedRequisitions[index].checked;
    setRequisitionList(updatedRequisitions);
  };

  const handleActionPress = (id) => {};

  const handleSearchIconPress = () => {
    navigation.navigate("purchaseOrderScreen");
  };

  return (
    <ContainerComponent>
      <View>
        <MyHeader
          isBack={true}
          title="Inventory"
          hasIcon={true}
          icon="pencil"
          onIconPress={handleSearchIconPress}
        />

        <SearchBar
          placeholder="Search requisitions"
          value={searchText}
          onChangeText={setSearchText}
        />
        <ScrollView>
          {requisitionList.map((item, index) => (
            <ListItem
              key={index}
              materialName={item.materialName}
              specification={item.specification}
              checked={item.checked}
              onToggle={() => handleToggleCheck(index)}
              onActionPress={() => handleActionPress(item.id)}
            />
          ))}
        </ScrollView>

        <TouchableOpacity
          onPress={() => navigation.navigate("formScreen")}
          style={[
            spacing.br2,
            {
              position: "absolute",
              bottom: 80,
              right: 20,
              backgroundColor: PRIMARY_COLOR,
              width: 140,
              height: 50,
              justifyContent: "center",
              alignItems: "center",
            },
          ]}
        >
          <View style={[styles.row]}>
            <P style={[typography.font20, spacing.mr1, { color: "white" }]}>
              +
            </P>
            <P style={[typography.font16, { color: "white" }]}>New Material</P>
          </View>
        </TouchableOpacity>

        {/* <Button
          style={[
            styles.btn,
            styles.bgPrimary,
            { justifyContent: "center", marginHorizontal: 16 },
          ]}
        >
          <H2 style={[styles.btnText, styles.textLarge, typography.textLight]}>
            Create Receipt
          </H2>
        </Button> */}
      </View>
    </ContainerComponent>
  );
};

const ListItem = ({ materialName, specification }) => {
  return (
    <View
      style={[
        styles.row,
        spacing.mh2,
        spacing.pv3,
        spacing.bbw05,
        {
          borderBottomColor: "#ccc",
          alignItems: "center",
        },
      ]}
    >
      <View style={[styles.row, { alignItems: "center" }]}>
        <View style={{ marginLeft: 10 }}>
          <H5 style={[typography.font16]}>{materialName}</H5>
          <P>{specification}</P>
        </View>
      </View>

      <View
        style={[
          spacing.pv1,
          spacing.ph3,
          spacing.br1,
          spacing.bw1,
          {
            borderColor: "#007acc",
          },
        ]}
      >
        <P style={[typography.font12, { color: "#007acc" }]}>Update</P>
      </View>
    </View>
  );
};

export default RequisitionScreen;
