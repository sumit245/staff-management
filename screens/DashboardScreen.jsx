import { Text, ScrollView, View, Dimensions } from "react-native";
import ContainerComponent from "../components/ContainerComponent";
import MyHeader from "../components/header/MyHeader";
import StatCard from "../components/card/Statcard";
import { tasks } from "../utils/faker";



export default function DashboardScreen() {
  return (
    <ContainerComponent>
      <MyHeader title="Dashboard" hasIcon={true} icon="notifications-outline" badgeCount={1} />
      <ScrollView>
        {
          tasks.map((task, index) =>
            <StatCard key={index}
              backgroundColor={task.backgroundColor}
              tasks={task.count}
              status={task.status}
            />)
        }

        <Text style={{ fontSize: 80 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aliquam id neque, nemo inventore tenetur excepturi! Modi facere nobis molestiae aliquam, distinctio dolorem itaque aperiam ab cupiditate maxime delectus ipsa?
        </Text>



      </ScrollView>
    </ContainerComponent>
  )
}
