import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { styles } from "../styles/components.styles";
const ProgressBar = ({
  progress,
  label = "",
  color = "#2b87b0",
  backgroundColor = "#e0e0e0",
  height = 20,
}) => {
  return (
    <View style={styles.pcontainer}>
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
  //If you need a button keep it otherwise remove
  return (
    <View style={styles.appContainer}>
      <ProgressBar progress={progress} label="Task Progress" />
      <Button title="Increase Progress" onPress={increaseProgress} />
    </View>
  );
};
export default App;
