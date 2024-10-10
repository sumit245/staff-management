import "react-native-gesture-handler"; //Don't ever remove this line
import { PaperProvider } from "react-native-paper";
import MyNavigationContainer from "./navigation/MyNavigationContainer";
import NotificationScreen from "./screens/NotificationScreen";
import HolidayListScreen from "./screens/HolidayListScreen";
import ProfileScreen from "./screens/ProfileScreen";
import AttendanceScreen from "./screens/AttendanceScreen";
import LandingPage from "./screens/LandingPage";
import ProjectTimeline from "./screens/ProjectTimeline";
import SuccessModal from "./components/SuccessModal";
import FormScreen from "./screens/FormScreen";
import LineItemScreen from "./screens/LineItemScreen";
import RequisitionScreen from "./screens/RequisitionScreen";
import PurchaseOrderScreen from "./screens/PurchaseOrderScreen";

export default function App() {
  return (
    <PaperProvider>
      {/* <MyNavigationContainer /> */}
      {/* <NotificationScreen /> */}
      {/* <HolidayListScreen/> */}
      {/* <ProfileScreen /> */}
      {/* <AttendanceScreen /> */}
      {/* <LandingPage /> */}
      {/* <ProjectTimeline /> */}
      {/* <SuccessModal /> */}
      {/* <FormScreen /> */}
      {/* <LineItemScreen /> */}
      {/* <RequisitionScreen /> */}
      <PurchaseOrderScreen />
    </PaperProvider>
  );
}
