import React, { useState } from "react";
import { styles } from "../styles/components.styles";
import { View, Animated, TouchableOpacity, Text } from "react-native";
const AnimatedFAB = ({ title, onPress }) => {
  const [scale] = useState(new Animated.Value(1));
  const [visible, setVisible] = useState(false);

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.9,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };
  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  const handleToggle = () => {
    setVisible(!visible);
  };
  return (
    <View style={styles.container}>
      {/* Toggle Button */}
      <TouchableOpacity
        style={styles.fab}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={handleToggle}
      >
        <Animated.View style={{ transform: [{ scale }] }}>
          <Text style={styles.fabText}>+</Text>
        </Animated.View>
      </TouchableOpacity>
      {/* Action Button */}
      {visible && (
        <TouchableOpacity style={styles.actionButton} onPress={onPress}>
          <Text style={styles.actionText}>{title}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
export default AnimatedFAB;
