import { View } from "react-native";
import StatCard from "./card/Statcard";
import { cardData } from "../utils/faker";
import { styles } from "../styles/components.styles";

export default function CardGrid() {
  return (
    <View style={styles.container}>
      {cardData.map((item) => (
        <View style={styles.row} key={item.id}>
          <StatCard
            backgroundColor={item.backgroundColor}
            tasks={item.tasks}
            status={item.status}
          />
        </View>
      ))}
    </View>
  );
}
