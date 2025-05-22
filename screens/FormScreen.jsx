import { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Platform,
  TextInput,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";

import Ionicons from "react-native-vector-icons/Ionicons";
import Button from "../components/buttons/Button";
import { H2, P, Span } from "../components/text";
import ContainerComponent from "../components/ContainerComponent";
import MyHeader from "../components/header/MyHeader";
import MyTextInput from "../components/input/MyTextInput";
import {
  PRIMARY_COLOR,
  PRIMARY_COLOR_TRANSPARENT,
  spacing,
  styles,
  typography,
} from "../styles";

const FormScreen = () => {
  const navigation = useNavigation();
  const [materialName, setMaterialName] = useState("");
  const [specifications, setSpecifications] = useState("");

  const [model, setModel] = useState("");
  const [remarks, setRemarks] = useState("");
  const [isRemarksVisible, setIsRemarksVisible] = useState(false);
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("");

  // Target Date
  const [targetDate, setTargetDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleSubmit = () => {
    const formData = {
      materialName,
      model,
      specifications,
      quantity,
      unit,
      remarks,
      // targetDate,
      targetDate: targetDate.toISOString(),
    };

    console.log("Submitting Form Data:", formData);
    try {
      navigation.navigate("purchaseOrderScreen", { newItem: formData });
      console.log("Navigation triggered");
    } catch (error) {
      console.error("Navigation error:", error);
    }
  };

  const toggleRemarksInput = () => {
    setIsRemarksVisible(!isRemarksVisible);
  };

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || targetDate;
    setShowDatePicker(Platform.OS === "ios");
    setTargetDate(currentDate);
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
          <Text style={{ textAlign: "right", color: "#888", bottom: 12 }}>
            {materialName.length}/30
          </Text>
        </View>
        {/* Specifications */}
        <View style={[{ paddingHorizontal: 12, bottom: 20 }]}>
          <MyTextInput
            title="Specifications"
            placeholder="Material brand, color, size, etc."
            value={specifications}
            onChangeText={setSpecifications}
          />
          <Text style={{ textAlign: "right", color: "#888", bottom: 12 }}>
            {model.length}/100
          </Text>
        </View>
        {/* Model */}
        <View style={{ paddingHorizontal: 12, bottom: 40 }}>
          <MyTextInput
            title="Model"
            placeholder="Enter Model"
            value={model}
            onChangeText={setModel}
          />
        </View>
        {/* Quantity and Unit in one row */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 12,
            gap: 12,
            bottom: 45,
          }}
        >
          <View style={{ flex: 1 }}>
            <Span style={[typography.font12, { marginBottom: 4 }]}>
              Quantity
            </Span>
            <TextInput
              placeholder="Enter Quantity"
              value={quantity}
              onChangeText={setQuantity}
              keyboardType="numeric"
              style={[
                spacing.p3,
                spacing.br1,
                typography.font18,
                {
                  borderColor: PRIMARY_COLOR,
                  borderWidth: 1,
                  height: 50,
                  backgroundColor: PRIMARY_COLOR_TRANSPARENT,
                },
              ]}
            />
          </View>

          <View style={{ flex: 1 }}>
            <Span style={[typography.font12, { marginBottom: 4 }]}>Unit</Span>
            <TextInput
              placeholder="e.g. kg, pcs"
              value={unit}
              onChangeText={setUnit}
              style={[
                spacing.p3,
                spacing.br1,
                typography.font18,
                {
                  borderColor: PRIMARY_COLOR,
                  borderWidth: 1,
                  height: 50,
                  backgroundColor: PRIMARY_COLOR_TRANSPARENT,
                },
              ]}
            />
          </View>
        </View>
        {/* Target Date Picker */}

        <View style={[spacing.ph3, { bottom: 40 }]}>
          <Span style={[typography.font12, spacing.mb1]}>Target Date</Span>
          <TouchableOpacity
            onPress={() => setShowDatePicker(true)}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderColor: PRIMARY_COLOR,
              borderWidth: 1,
              borderRadius: 6,
              height: 50,
              paddingHorizontal: 12,
              backgroundColor: PRIMARY_COLOR_TRANSPARENT,
            }}
          >
            <Text style={{ fontSize: 16 }}>{targetDate.toDateString()}</Text>

            <Ionicons name="calendar-outline" size={22} color={PRIMARY_COLOR} />
          </TouchableOpacity>

          {showDatePicker && (
            <DateTimePicker
              value={targetDate}
              mode="date"
              display="default"
              onChange={onChangeDate}
            />
          )}
        </View>
        {/* Additional Details */}
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
            { justifyContent: "center", marginHorizontal: 12, top: 150 },
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
