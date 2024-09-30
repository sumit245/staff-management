import React, { useEffect } from "react";
import {
  View,
  Text,
  Animated,
  TouchableOpacity,
} from "react-native";
import { styles } from "../styles/components.styles";

const Snackbar = ({ message, visible, duration = 3000, onDismiss }) => {
  const opacity = new Animated.Value(0);

  useEffect(() => {
    if (visible) {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();

      const timer = setTimeout(() => {
        onDismiss();
      }, duration);

      return () => clearTimeout(timer);
    } else {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible, duration, onDismiss]);

  return (
    <Animated.View style={[styles.snackbar, { opacity }]}>
      <Text style={styles.message}>{message}</Text>
      <TouchableOpacity onPress={onDismiss}>
        <Text style={styles.dismissText}>Dismiss</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};


export default Snackbar;
