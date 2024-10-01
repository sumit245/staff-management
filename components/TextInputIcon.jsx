import * as React from "react";
import { TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import ContainerComponent from "./ContainerComponent";

export default function TextInputIcon() {
  const [text, setText] = React.useState("");
  const [secureText, setSecureText] = React.useState(true);

  return (
    <ContainerComponent>
      <TextInput
        label="Password"
        value={text}
        onChangeText={(value) => setText(value)}
        secureTextEntry={secureText}
        style={{
          backgroundColor: "#2b87b022",
        }}
        right={
          <TextInput.Icon
            icon={() => (
              <Icon
                name={secureText ? "eye-off" : "eye"}
                size={20}
                onPress={() => setSecureText(!secureText)}
              />
            )}
          />
        }
      />
    </ContainerComponent>
  );
}
