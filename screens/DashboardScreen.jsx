// import { Text, ScrollView } from "react-native";
// import ContainerComponent from "../components/ContainerComponent";
// import MyHeader from "../components/header/MyHeader";
// import StatCard from "../components/card/Statcard";
// import { tasks } from "../utils/faker";

// export default function DashboardScreen() {
//   return (
//     <ContainerComponent>
//       <MyHeader
//         title="Dashboard"
//         hasIcon={true}
//         icon="notifications-outline"
//         badgeCount={1}
//       />
//       <ScrollView>
//         {tasks.map((task, index) => (
//           <StatCard
//             key={index}
//             backgroundColor={task.backgroundColor}
//             tasks={task.count}
//             status={task.status}
//           />
//         ))}
//         <Text style={{ fontSize: 80 }}>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aliquam
//           id neque, nemo inventore tenetur excepturi! Modi facere nobis
//           molestiae aliquam, distinctio dolorem itaque aperiam ab cupiditate
//           maxime delectus ipsa?
//         </Text>
//       </ScrollView>
//     </ContainerComponent>
//   );
// }

import { Text, ScrollView, View, Dimensions } from "react-native";
import ContainerComponent from "../components/ContainerComponent";
import MyHeader from "../components/header/MyHeader";
import StatCard from "../components/card/Statcard";
import { tasks } from "../utils/faker";
import { BarChart } from "react-native-chart-kit"; // Make sure to import BarChart

export default function DashboardScreen() {
  // Prepare chart data outside the return statement
  const chartData = {
    labels: tasks.map((task) => task.status), // Task statuses for labels
    datasets: [
      {
        data: tasks.map((task) => task.count), // Task counts for data
      },
    ],
  };

  const screenWidth = Dimensions.get("window").width; // Get screen width

  return (
    <ContainerComponent>
      <MyHeader
        title="Dashboard"
        hasIcon={true}
        icon="notifications-outline"
        badgeCount={1}
      />
      <ScrollView>
        {/* Task Cards */}
        {tasks.map((task, index) => (
          <StatCard
            key={index}
            backgroundColor={task.backgroundColor}
            tasks={task.count}
            status={task.status}
          />
        ))}

        {/* Bar Chart */}
        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 20, textAlign: "center" }}>
            Task Statistics
          </Text>
          <BarChart
            data={chartData}
            width={screenWidth - 40} // Adjust based on padding
            height={220}
            yAxisLabel=""
            chartConfig={{
              backgroundColor: "#e26a00",
              backgroundGradientFrom: "#fb8c00",
              backgroundGradientTo: "#ffa726",
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726",
              },
            }}
            verticalLabelRotation={30}
          />
        </View>

        {/* Placeholder Text */}
        <Text style={{ fontSize: 80 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aliquam
          id neque, nemo inventore tenetur excepturi! Modi facere nobis
          molestiae aliquam, distinctio dolorem itaque aperiam ab cupiditate
          maxime delectus ipsa?
        </Text>
      </ScrollView>
    </ContainerComponent>
  );
}
