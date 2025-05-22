import { useState } from "react";
import { View, ScrollView } from "react-native";
import ContainerComponent from "../components/ContainerComponent";
import { requisitions } from "../utils/faker";
import SearchBar from "../components/input/SearchBar";
import MyHeader from "../components/header/MyHeader";
import { styles } from "../styles/components.styles";
import { H5, P } from "../components/text";
import { spacing, typography } from "../styles";

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
          icon="add"
          isIconGreen={true}
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
              status={item.status}
              checked={item.checked}
              onToggle={() => handleToggleCheck(index)}
              onActionPress={() => handleActionPress(item.id)}
            />
          ))}
        </ScrollView>

        {/* + new Material add code comment hai  */}

        {/* <TouchableOpacity
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
        </TouchableOpacity> */}
      </View>
    </ContainerComponent>
  );
};

const ListItem = ({ materialName, specification, status }) => {
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
          justifyContent: "space-between",
        },
      ]}
    >
      <View style={[styles.row, { alignItems: "center" }]}>
        <View style={{ marginLeft: 10 }}>
          <H5 style={[typography.font16]}>{materialName}</H5>
          <P>{specification}</P>
        </View>
      </View>

      {/* Status Pill with Background */}
      <View>
        <P
          style={[
            typography.font12,
            {
              color:
                status === "Approved"
                  ? "#155724"
                  : status === "Pending"
                  ? "#856404"
                  : "#000",
            },
          ]}
        >
          {status}
        </P>
      </View>
    </View>
  );
};

export default RequisitionScreen;
