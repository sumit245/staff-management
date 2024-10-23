import ContainerComponent from "../components/ContainerComponent";
import MyHeader from "../components/header/MyHeader";
import StatCard from "../components/card/Statcard";
import { tasks } from "../utils/faker";
import MyFlatList from "../components/utility/MyFlatList";
import { useNavigation } from "@react-navigation/native";

export default function DashboardScreen() {
  const navigation = useNavigation();

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
        keyExtractor={(item) => item.id.toString()} // Use item.id instead of index for key
        numColumns={2}
      />
    </ContainerComponent>
  );
}
