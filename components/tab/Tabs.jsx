import React, { useRef, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  PanResponder,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

const PRIMARY_COLOR = "#007bff";

const Tabs = ({ tabs = [], contents = [] }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) =>
        Math.abs(gestureState.dx) > 20,
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx > 50 && selectedIndex > 0) {
          setSelectedIndex(selectedIndex - 1);
        } else if (gestureState.dx < -50 && selectedIndex < tabs.length - 1) {
          setSelectedIndex(selectedIndex + 1);
        }
      },
    })
  ).current;

  return (
    <View style={{ flex: 1 }}>
      {/* Tab headers */}
      <View
        style={{
          flexDirection: "row",
          borderBottomWidth: 1,
          borderBottomColor: "#ccc",
        }}
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 10 }}
        >
          {tabs.map((label, index) => {
            const isActive = selectedIndex === index;
            return (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedIndex(index)}
                style={{
                  paddingVertical: 6,
                  paddingHorizontal: 15,
                  marginHorizontal: 5,
                  borderBottomWidth: isActive ? 2 : 0,
                  borderBottomColor: isActive ? PRIMARY_COLOR : "transparent",
                }}
              >
                <Text
                  style={{
                    color: isActive ? PRIMARY_COLOR : "#555",
                    fontWeight: "bold",
                  }}
                >
                  {label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* Swipeable content */}
      <View style={{ flex: 1 }} {...panResponder.panHandlers}>
        <View style={{ width: width, padding: 20 }}>
          {contents[selectedIndex]}
        </View>
      </View>
    </View>
  );
};

export default Tabs;
