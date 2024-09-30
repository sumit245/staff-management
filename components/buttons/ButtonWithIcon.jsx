import { TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";
import { styles } from "../../styles/components.styles";
import ContainerComponent from "../ContainerComponent";

export default function ButtonWithIcon() {
  return (
    <ContainerComponent>
      <TouchableOpacity>
        <Button
          icon="camera"
          mode="contained"
          onPress={() => console.log("Pressed")}
          style={styles.button}
        >
          Camera
        </Button>
      </TouchableOpacity>
    </ContainerComponent>
  );
}
