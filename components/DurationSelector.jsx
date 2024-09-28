import { View } from "react-native";
import MyChipSelector from "./input/MyChipSelector";
import { H5 } from "./text";
import { styles } from "../styles/components.styles";
import { leaveTypes } from "../utils/faker";

export default function DurationSelector({ duration, setDuration }) {
  return (
    <View style={{ marginVertical: 4 }}>
      <H5>Duration</H5>
      <View style={styles.row}>
        {leaveTypes.map((option, index) => (
          <MyChipSelector
            icon={option.icon}
            id={option.id}
            title={option.type}
            key={index}
            onPressed={(indexs) => console.log(`${index} is pressed`)}
          />
        ))}
      </View>
    </View>
  );
}
