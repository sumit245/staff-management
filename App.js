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
import SearchBar from "./components/input/SearchBar";
import SearchableDropDown from "./components/SearchableDropdown";
import PrivacyPolicy from "./screens/PrivacyPolicy";
import TermsAndConditions from "./screens/TermsAndConditions";
import ApplyLeaveForm from "./screens/ApplyLeaveForm";
import AllLeaves from "./screens/AllLeaves";
import CheckOut from "./screens/CheckOut";
import Attendance from "./components/Attendance";
import AttendancePunch from "./components/AttendancePunch";

export default function App() {
  return (
    <PaperProvider>
      {/* <MyNavigationContainer /> */}
      {/* <Attendance /> */}
      <AttendancePunch />
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
      {/* <PurchaseOrderScreen /> */}
      {/* <SearchableDropDown /> */}
      {/* <PrivacyPolicy /> */}
      {/* <TermsAndConditions /> */}
      {/* <ApplyLeaveForm /> */}
      {/* {<AllLeaves/>} */}
      {/* {<CheckOut />} */}
    </PaperProvider>
  );
}
