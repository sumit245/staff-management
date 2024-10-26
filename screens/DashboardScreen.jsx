import { useState } from "react";
import ContainerComponent from "../components/ContainerComponent";
import MyHeader from "../components/header/MyHeader";
import StatCard from "../components/card/Statcard";
import { tasks } from "../utils/faker";
import MyFlatList from "../components/utility/MyFlatList";
import { useNavigation } from "@react-navigation/native";
import { View, Image } from "react-native";
import { layouts, SCREEN_WIDTH, spacing, styles, typography } from "../styles";
import { H3, P } from "../components/text";
import moment from "moment";
import { staff } from "../utils/faker"; //TODO: This will come from reducer store


export default function DashboardScreen() {
  const navigation = useNavigation();
  const today = useState(moment().format('DD MMM YYYY'))

  const navigateToNotification = () => {
    navigation.navigate("NotificationScreen");
  };

  const navigateToTaskList = () => {
    navigation.navigate("taskList");
  };

  return (
    <ContainerComponent>
      <View style={[styles.row, spacing.mh2, { alignItems: 'center', width: SCREEN_WIDTH - 16 }]}>
        <View>
          <H3 style={typography.textBold}>Good Morning,  {staff.first_name}</H3>
          <P>{today}</P>
        </View>
        <Image
          source={{ uri: staff.image }}
          style={[layouts.circle12, spacing.mv3, layouts.center]}
        />
      </View>
      {/* <TaskList/> */}

      <MyFlatList
        data={tasks}
        renderItem={({ item }) => (
          <StatCard
            key={item.id}
            backgroundColor={item.backgroundColor}
            tasks={item.count}
            status={item.status}
            onPress={
              item.id === 1 ? navigateToTaskList : null
            }
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    </ContainerComponent>
  );
}


