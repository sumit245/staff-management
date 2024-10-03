import React, { useState } from "react";
import { View, Button } from "react-native";
import Snackbar from "../../components/utility/Snackbar";


const App = () => {
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const showSnackbar = (message) => {
    setSnackbarMessage(message);
    setSnackbarVisible(true);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="Show Snackbar"
        onPress={() => showSnackbar("This is a snackbar")}
      />
      <Snackbar
        message={snackbarMessage}
        visible={snackbarVisible}
        variant={4}
        onDismiss={() => setSnackbarVisible(false)}
      />
    </View>
  );
};

export default App;



