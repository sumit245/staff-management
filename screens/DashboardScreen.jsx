import { useState } from "react";
import { View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import Icon from "react-native-vector-icons/Ionicons";
import ContainerComponent from "../components/ContainerComponent";
import MyFlatList from "../components/utility/MyFlatList";
import { H3, H4, H5, P } from "../components/text";
import CardFullWidth from "../components/card/CardFullWidth";
import StatCard from "../components/card/Statcard";
import {
  layouts,
  LIGHT,
  PRIMARY_COLOR,
  SCREEN_WIDTH,
  spacing,
  styles,
  typography,
} from "../styles";
import { staff, tasks } from "../utils/faker"; //TODO: This will come from reducer store
import { TouchableOpacity } from "react-native";

export default function DashboardScreen() {
  const navigation = useNavigation();
  const today = useState(moment().format("DD MMM YYYY"));

  const navigateToNotification = () => {
    navigation.navigate("NotificationScreen");
  };

  const navigateToTaskList = () => {
    navigation.navigate("taskList");
  };

  return (
    <ContainerComponent>
      <View
        style={[
          styles.row,
          spacing.mh2,
          { alignItems: "center", width: SCREEN_WIDTH - 16 },
        ]}
      >
        <View>
          <H3 style={typography.textBold}>Good Morning, {staff.first_name}</H3>
          <P style={spacing.ml1}>{today}</P>
        </View>
        <Image
          source={{ uri: staff.image }}
          style={[layouts.circle12, spacing.mv3, layouts.center]}
        />
      </View>
      {/* Welcome message */}
     

      <View style={[spacing.mt2, { width: SCREEN_WIDTH - 18, }]}>
        <H3 style={typography.textBold}>My Attendance</H3>
        <CardFullWidth backgroundColor={LIGHT}>
          <View style={[styles.row, { alignItems: 'center' }]}>
            <Icon name="alarm" size={64} color={PRIMARY_COLOR} />
            <TouchableOpacity style={layouts.center}>
              <Icon name="log-out-outline" size={32} color={PRIMARY_COLOR} />
              <H4>Clock Out</H4>
            </TouchableOpacity>
          </View>
          <H5>Clock started at: {moment().format('HH:mm:ss A')}</H5>
        </CardFullWidth>
      </View>
      

      {/* Attendance Data */}

      <MyFlatList
        data={tasks}
        renderItem={({ item }) => (
          <StatCard
            key={item.id}
            backgroundColor={item.backgroundColor}
            tasks={item.count}
            status={item.status}
            onPress={item.id === 1 ? navigateToTaskList : null}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        ListHeaderComponent={() => (
          <H3 style={[typography.textBold, spacing.m2]}>My Projects</H3>
        )}
      />
    </ContainerComponent>
  );
}
