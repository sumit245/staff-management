import React from "react";
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
    <TouchableOpacity>
      <View style={[spacing.mh1, { width: SCREEN_WIDTH - 16 }]}>
        <View style={[{ flexDirection: "row", alignItems: "center" }]}>
          <View style={styles.iconWrapper}>
            <Icon name="calendar" size={24} color="#fff" />
          </View>
          <H6>{item.date}</H6>
        </View>

        <View
          style={[
            styles.titleAndDayContainer,
            { marginLeft: "auto", alignItems: "flex-end" },
          ]}
        >
          {/* <H5 style={typography.textDark}>{item.title}</H5> */}
          <H5
            style={{
              ...typography.textDark,
              Top: 10,
              fontWeight: "bold",
            }}
          >
            {item.title}
          </H5>
          <P style={typography.textDark}>{item.day}</P>
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
