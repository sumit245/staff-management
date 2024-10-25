import "react-native-gesture-handler"; //Don't ever remove this line
import { useEffect } from "react";
import { PaperProvider } from "react-native-paper";
import MyNavigationContainer from "./navigation/MyNavigationContainer";
import AttendancePunchScreen from "./screens/AttendancePunchScreen";
import { checkPermissions } from "./utils/checkPermissions";

export default function App() {
  useEffect(() => {
    checkPermissions();
  }, []);
  return (
    <PaperProvider>
      <MyNavigationContainer />
      {/* <AttendancePunchScreen /> */}
      {/* <checkPermissions/> */}
    </PaperProvider>
  );
}
