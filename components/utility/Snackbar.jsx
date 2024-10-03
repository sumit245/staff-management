import React, { useEffect } from "react";
import { Text, Animated } from "react-native";
import { styles } from "../../styles/components.styles";
import { H5 } from '../text'

const Snackbar = ({ message, visible, onDismiss, variant = 0, duration = 3000, }) => {
  const opacity = new Animated.Value(0);

  useEffect(() => {
    if (visible) {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }).start();

      const timer = setTimeout(() => {
        onDismiss();
      }, duration);

      return () => clearTimeout(timer);
    } else {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [visible, duration, onDismiss]);

  return (
    <Animated.View style={[styles.snackbar,
    variant === 0 ? styles.bgDark : variant === 1 ? styles.bgWarning : variant === 2 ? styles.bgInfo : variant === 3 ? styles.bgSuccess : styles.bgDanger,
    {
      opacity
    }]}>
      <Text style={styles.snackMessage}>{message}</Text>
      <H5 style={[styles.textLight, { fontWeight: 'bold' }]} onPress={onDismiss}>Close</H5>
    </Animated.View >
  );
};

export default Snackbar;

// 0-black,1-warning,2-info,3-success,4-danger
