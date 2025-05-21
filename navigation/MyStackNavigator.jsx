import MyMaterialBottomNavigator from "./MyMaterialBottomNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import DashboardScreen from "../screens/DashboardScreen";
import ApplyLeaveForm from "../screens/ApplyLeaveForm";
import RequisitionScreen from "../screens/RequisitionScreen";
import PurchaseOrderScreen from "../screens/PurchaseOrderScreen";
import FormScreen from "../screens/FormScreen";
import NotificationScreen from "../screens/NotificationScreen";
import PrivacyPolicy from "../screens/PrivacyPolicy";
import AttendancePunchScreen from "../screens/AttendancePunchScreen";
import ProjectTimeline from "../screens/ProjectTimeline";
import TaskList from "../components/card/CardTask";
import HolidayListScreen from "../screens/HolidayListScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ConveyanceBillForm from "../screens/ConveyanceBillForm";

//import ApplyLeaveForm from "../screens/ApplyLeaveForm";
//import SuccessModal from "../components/SuccessModal";
import EditProfileScreen from "../screens/EditProfileScreen";
import SettingsScreen from "../screens/SettingScreen";
import InternalSetting from "../screens/InternalSetting";
import TaskCardScreen from "../screens/TaskCardScreen";
import ToDoTaskCardScreen from "../screens/ToDoTaskCardScreen";
import NoRecord from "../screens/NoRecord";
import MyNotesScreen from "../screens/MyNotesScreen";
import InReviewScreen from "../screens/InReviewScreen";
import OpenProjectScreen from "../screens/OpenProjectScreen";
import ReportsScreen from "../screens/ReportsScreen";
import ConveyanceManagementScreen from "../screens/ConveyanceManagementScreen";
const Stack = createNativeStackNavigator();

export default function MyStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="loginScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="loginScreen" component={LoginScreen} />
      <Stack.Screen name="attendancePunch" component={AttendancePunchScreen} />
      <Stack.Screen name="dashboardScreen" component={DashboardScreen} />
      <Stack.Screen name="homeScreen" component={MyMaterialBottomNavigator} />
      <Stack.Screen name="projectTimeLine" component={ProjectTimeline} />
      <Stack.Screen name="applyLeaveForm" component={ApplyLeaveForm} />
      <Stack.Screen name="requisitions" component={RequisitionScreen} />

      <Stack.Screen
        name="purchaseOrderScreen"
        component={PurchaseOrderScreen}
      />
      <Stack.Screen name="formScreen" component={FormScreen} />
      <Stack.Screen name="notificationScreen" component={NotificationScreen} />
      <Stack.Screen name="privacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="taskList" component={TaskList} />
      <Stack.Screen name="profileScreen" component={ProfileScreen} />
      <Stack.Screen name="holidayListScreen" component={HolidayListScreen} />

      <Stack.Screen name="ApplyLeaveForm" component={ApplyLeaveForm} />

      {/* <Stack.Screen name="SuccessModal" component={SuccessModal}/> */}
      <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="internalSetting" component={InternalSetting} />
      <Stack.Screen name="taskCardScreen" component={TaskCardScreen} />
      <Stack.Screen name="ToDoTaskCardScreen" component={ToDoTaskCardScreen} />
      <Stack.Screen name="NoRecord" component={NoRecord} />
      <Stack.Screen name="myNotesScreen" component={MyNotesScreen} />
      <Stack.Screen name="inReviewScreen" component={InReviewScreen} />
      <Stack.Screen name="openProjectScreen" component={OpenProjectScreen} />
      <Stack.Screen name="reportsScreen" component={ReportsScreen} />
      <Stack.Screen name="conveyance" component={ConveyanceManagementScreen} />
      <Stack.Screen name="conveyancebill" component={ConveyanceBillForm} />
    </Stack.Navigator>
  );
}
