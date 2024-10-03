import "react-native-gesture-handler"; //Don't ever remove this line
import { PaperProvider } from "react-native-paper";
import MyNavigationContainer from "./navigation/MyNavigationContainer";
import NotificationScreen from "./screens/NotificationScreen";
import HolidayListScreen from "./screens/HolidayListScreen";
import ProfileScreen from "./screens/ProfileScreen";

export default function App() {
  return (
    <PaperProvider>
      {/* <MyNavigationContainer /> */ }
      {/* <NotificationScreen/> */ }
      {/* <HolidayListScreen/> */ }
      <ProfileScreen/>
    </PaperProvider>
  );
}

// Wrap
