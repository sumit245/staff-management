import { useState } from "react";
import ContainerComponent from "../components/ContainerComponent";
import MyHeader from "../components/header/MyHeader";
import SearchBar from "../components/input/SearchBar";
import Button from "../components/buttons/Button";
import Icon from "react-native-vector-icons/Ionicons";
import { PRIMARY_COLOR, ICON_LARGE } from "../styles";
import Tabs from "../components/tab/Tabs";

const ConveyanceManagementScreen = ({ navigation }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <ContainerComponent style={{ flex: 1 }}>
      <MyHeader title="Conveyance" isBack={true} hasIcon={true} />

      <SearchBar
        placeholder="Search Project Code or Name"
        value={searchQuery}
        onChangeText={handleSearch}
        style={[{ marginTop: 12 }]}
      />

      {/* Horizontal Tabs */}

      <Tabs
        tabs={["This Week", "This Month", "Pending", "Rejected"]}
        selectedIndex={tabIndex}
        onTabPress={(index) => setTabIndex(index)}
      />

      {/* Floating Add Button */}
      <Button
        style={[
          {
            position: "absolute",
            right: 20,
            bottom: 80,
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
        <Icon name="add" size={35} color="#ffffff" />
      </Button>
    </ContainerComponent>
  );
};

export default ConveyanceManagementScreen;
