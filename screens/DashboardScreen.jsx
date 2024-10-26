import { useState } from "react";
import ContainerComponent from "../components/ContainerComponent";
import MyHeader from "../components/header/MyHeader";
import StatCard from "../components/card/Statcard";
import { tasks } from "../utils/faker";
import MyFlatList from "../components/utility/MyFlatList";
import { useNavigation } from "@react-navigation/native";
import { View, Image } from "react-native";
import { layouts, spacing, styles, typography } from "../styles";
import { H3, P } from "../components/text";
import moment from "moment";


export default function DashboardScreen() {
  const navigation = useNavigation();
  const today = useState(moment().format('DD MMM YYYY'))

  const [user, setUser] = useState({
    username: "Rohit",
    profilePicture: "https://randomuser.me/api/portraits/men/5.jpg"
  })

  const navigateToNotification = () => {
    navigation.navigate("NotificationScreen");
  };

  const navigateToTaskList = () => {
    navigation.navigate("TaskList");
  };

  return (
    <ContainerComponent>
      <MyHeader
        title="Dashboard"
        hasIcon={true}
        icon="notifications-outline"
        hasBadge={true}
        badgeCount={1}
        onIconPress={navigateToNotification}
      />
      <View style={[styles.row, { alignItems: 'center' }]}>
        <View>
          <H3 style={typography.textBold}>Good Morning,  {user.username}</H3>
          <P>{today}</P>
        </View>
        <Image
          source={{ uri: user.profilePicture }}
          style={[layouts.circle12, spacing.mh3, spacing.mv3, layouts.center]}
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
              item.status === "Total Project" ? navigateToTaskList : null
            }
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    </ContainerComponent>
  );
}


