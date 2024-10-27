import "react-native-gesture-handler"; //Don't ever remove this line
import { useEffect } from "react";
import { PaperProvider } from "react-native-paper";
import MyNavigationContainer from "./navigation/MyNavigationContainer";
import { checkPermissions } from "./utils/checkPermissions";

export default function App() {
<<<<<<< HEAD
  useEffect(() => {
    checkPermissions();
  }, []);
=======

>>>>>>> 229a364630b49354edd39a8b94e196186375964d
  return (
    <PaperProvider>
      <MyNavigationContainer />
    </PaperProvider>
  );
}
