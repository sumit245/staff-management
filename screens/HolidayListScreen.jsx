import { View, TouchableOpacity, FlatList } from "react-native";
import { Divider } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { holidays } from "../utils/faker";
import ContainerComponent from "../components/ContainerComponent";
import MyHeader from "../components/header/MyHeader";
import { styles } from "../styles/components.styles";
import { H5, H6, P } from "../components/text";
import { SCREEN_WIDTH, spacing, typography } from "../styles";

export default function HolidayListScreen() {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={{ marginVertical: 8 }}>
      <View
        style={[
          spacing.mh1,
          {
            width: SCREEN_WIDTH - 16,
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 8,
            paddingHorizontal: 8,
          },
        ]}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={[
              styles.iconWrapper,
              { justifyContent: "center", alignItems: "center" },
            ]}
          >
            <Icon name="calendar" size={24} color="#fff" />
          </View>
          <H6 style={{ marginLeft: 4 }}>{item.date}</H6>
        </View>

        <View style={{ alignItems: "flex-end" }}>
          <H5
            style={{
              ...typography.textDark,
              fontWeight: "bold",
            }}
          >
            {item.title}
          </H5>
          <P style={{ ...typography.textDark }}>{item.day}</P>
        </View>
      </View>
      <Divider />
    </TouchableOpacity>
  );

  return (
    <ContainerComponent>
      <MyHeader title="Events" isBack={true} hasIcon={true} />
      <View>
        <FlatList
          data={holidays}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ContainerComponent>
  );
}
