import { useState } from "react";
import { View, TextInput } from "react-native";
import ContainerComponent from "../components/ContainerComponent";
import MyHeader from "../components/header/MyHeader";
import { SCREEN_WIDTH, typography } from "../styles";
import Button from "../components/buttons/Button";
import { H2 } from "../components/text";
import { styles } from "../styles/components.styles";

export default function MyNotesScreen() {
  const [note, setNote] = useState("");

  const handleSave = () => {};

  return (
    <ContainerComponent>
      <View style={{ flex: 1 }}>
        <MyHeader title="My Notes" isBack={true} hasIcon={true} />

        <View
          style={{
            width: SCREEN_WIDTH - 16,
            elevation: 3,
            backgroundColor: "#FFFFFF",
            padding: 16,
            margin: 12,
            borderRadius: 8,
          }}
        >
          <TextInput
            style={{
              ...typography.textDark,
              height: 100,
              textAlignVertical: "top",
            }}
            placeholder="Write your notes here..."
            placeholderTextColor="#999"
            multiline
            value={note}
            onChangeText={(text) => setNote(text)}
          />
        </View>

        <View
          style={{
            position: "absolute",
            bottom: 20,
            left: 0,
            right: 0,
          }}
        >
          <Button
            style={[
              styles.btn,
              styles.bgPrimary,
              { justifyContent: "center", marginHorizontal: 120 },
            ]}
            onPress={handleSave}
          >
            <H2
              style={[styles.btnText, styles.textLarge, typography.textLight]}
            >
              Save
            </H2>
          </Button>
        </View>
      </View>
    </ContainerComponent>
  );
}
