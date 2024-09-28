import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ProgressBar = ({
  progress,
  label = "",
  color = "#4CAF50",
  backgroundColor = "#e0e0e0",
  height = 20,
}) => {
  return (
    <View style={styles.container}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <View style={[styles.progressBarContainer, { backgroundColor, height }]}>
        <View
          style={[
            styles.progressBar,
            { width: `${progress}%`, backgroundColor: color },
          ]}
        />
      </View>
      <Text style={styles.progressText}>{progress}%</Text>
    </View>
  );
};

const App = () => {
  const [progress, setProgress] = useState(40);

  const increaseProgress = () => {
    if (progress < 100) {
      setProgress(progress + 10);
    }
  };

  return (
    <View style={styles.appContainer}>
      <ProgressBar progress={progress} label="Task Progress" />
      <Button title="Increase Progress" onPress={increaseProgress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignItems: "center",
    width: "100%",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  progressBarContainer: {
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    borderRadius: 10,
  },
  progressText: {
    marginTop: 5,
    fontSize: 14,
    color: "#888",
  },
  appContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
});

export default App;
