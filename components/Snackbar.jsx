import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from "react-native";

const Snackbar = ({
  message,
  visible,
  onDismiss,
  duration = 3000,
  actionText,
  onActionPress,
}) => {
  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    if (visible) {
      Animated.timing(animation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();

      const timer = setTimeout(() => {
        onDismiss();
        Animated.timing(animation, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [visible]);

  const snackbarStyle = {
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [100, 0],
        }),
      },
    ],
    opacity: animation,
  };

  if (!visible) {
    return null;
  }

  return (
    <Animated.View style={[styles.snackbar, snackbarStyle]}>
      <Text style={styles.snackbarText}>{message}</Text>
      {actionText && (
        <TouchableOpacity onPress={onActionPress}>
          <Text style={styles.actionText}>{actionText}</Text>
        </TouchableOpacity>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  snackbar: {
    position: "absolute",
    bottom: 30,
    left: 20,
    right: 20,
    backgroundColor: "#323232",
    padding: 16,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 6,
  },
  snackbarText: {
    color: "#ffffff",
    fontSize: 16,
    flex: 1,
  },
  actionText: {
    color: "#ffab00",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 16,
  },
});

export default Snackbar;
