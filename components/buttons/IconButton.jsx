import { TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";
import { styles } from "../../styles/components.styles";
import ContainerComponent from "../ContainerComponent";

export default function IconButton() {
  return (
    <ContainerComponent>
      <TouchableOpacity>
        <Button
          icon="camera"
          mode="contained"
          onPress={() => console.log("Pressed")}
          style={styles.roundButton}
          labelStyle={styles.iconStyle}
          compact
        />
      </TouchableOpacity>
    </ContainerComponent>
  );
}
