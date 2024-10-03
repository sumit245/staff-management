import { ScrollView } from "react-native";
import ContainerComponent from "../components/ContainerComponent";
import MyHeader from "../components/header/MyHeader";
import StatCard from "../components/card/Statcard";
import { tasks } from "../utils/faker";
import MyFlatList from "../components/utility/MyFlatList";

export default function DashboardScreen() {
  return (
    <ContainerComponent>
      <MyHeader
        title="Dashboard"
        hasIcon={true}
        icon="notifications-outline"
        hasBadge={true}
        badgeCount={1}
      />
      <MyFlatList
        data={tasks}
        renderItem={({ item }) =>
          <StatCard
            key={item.id}
            backgroundColor={item.backgroundColor}
            tasks={item.count}
            status={item.status} />}
        keyExtractor={(item, index) => index}
        numColumns={2}


      />
    </ContainerComponent>
  );
}
