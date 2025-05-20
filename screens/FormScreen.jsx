import { useState } from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import Button from "../components/buttons/Button";
import { H2 } from "../components/text";
import ContainerComponent from "../components/ContainerComponent";
import MyHeader from "../components/header/MyHeader";
import MyTextInput from "../components/input/MyTextInput";
import { styles, typography } from "../styles";

const FormScreen = () => {
  const [materialName, setMaterialName] = useState(""); // For material name
  const [itemCode, setItemCode] = useState(""); // For item code
  const [model, setModel] = useState("");
  const [remarks, setRemarks] = useState("");
  const [isRemarksVisible, setIsRemarksVisible] = useState(false); // State to toggle visibility of remarks input

  const handleSubmit = () => {
    console.log("Form Submitted:", {
      materialName,
      itemCode,
      model,
      remarks,
    });
  };

  const toggleRemarksInput = () => {
    setIsRemarksVisible(!isRemarksVisible); // Toggle the visibility of remarks input
  };

  return (
    <ContainerComponent>
      <ScrollView>
        <MyHeader title="Add New Material" isBack={true} hasIcon={true} />

        {/* Material Name */}
        <View style={{ paddingHorizontal: 12 }}>
          <MyTextInput
            title="Material Name"
            placeholder="Enter Material Name"
            value={materialName}
            onChangeText={setMaterialName}
          />
          {/* Material Name Character Count */}
          <Text style={{ textAlign: "right", color: "#888", bottom: 12 }}>
            {materialName.length}/30
          </Text>
        </View>

        {/* Item Code */}
        <View style={{ paddingHorizontal: 12 }}>
          <MyTextInput
            title="Item Code"
            placeholder="Enter Item Code"
            value={itemCode}
            onChangeText={setItemCode}
          />
        </View>

        {/* Specifications */}
        <View style={{ paddingHorizontal: 12 }}>
          <MyTextInput
            title="Specifications"
            placeholder="Material brand, color, size, etc."
            value={model}
            onChangeText={setModel}
          />
          {/* Specifications Character Count */}
          <Text style={{ textAlign: "right", color: "#888", bottom: 12 }}>
            {model.length}/100
          </Text>
        </View>

        {/* Model */}
        <View style={{ paddingHorizontal: 12 }}>
          <MyTextInput
            title="Model"
            placeholder="Enter Model"
            value={model}
            onChangeText={setModel}
          />
        </View>

        {/* Additional Details (formerly Remarks) */}
        <View style={{ paddingHorizontal: 12 }}>
          <TouchableOpacity onPress={toggleRemarksInput}>
            <Text style={{ color: "#007BFF", fontSize: 16 }}>Remarks</Text>
          </TouchableOpacity>

          {isRemarksVisible && (
            <MyTextInput
              title="Additional Details"
              placeholder="Enter Additional Details"
              value={remarks}
              onChangeText={setRemarks}
              multiline={true}
              style={[
                styles.textInputField,
                {
                  height: 120,
                  textAlignVertical: "top",
                },
              ]}
            />
          )}
        </View>

        {/* Submit Button */}
        <Button
          style={[
            styles.btn,
            styles.bgPrimary,
            { justifyContent: "center", marginHorizontal: 12, top: 200 },
          ]}
          onPress={handleSubmit}
        >
          <H2 style={[styles.btnText, styles.textLarge, typography.textLight]}>
            Submit
          </H2>
        </Button>
      </ScrollView>
    </ContainerComponent>
  );
};

export default FormScreen;
