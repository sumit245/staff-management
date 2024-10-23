import LoginScreen from "../screens/LoginScreen";
import ApplyLeaveForm from "../screens/ApplyLeaveForm";
import SettingScreen from "../screens/SettingScreen";
import RequisitionScreen from "../screens/RequisitionScreen";
import PurchaseOrderScreen from "../screens/PurchaseOrderScreen";
import FormScreen from "../screens/FormScreen";
import NotificationScreen from "../screens/NotificationScreen";
import PrivacyPolicy from "../screens/PrivacyPolicy";
import TaskList from "../screens/TaskList";
import DashboardScreen from "../screens/DashboardScreen";
import MyMaterialBottomNavigator from "./MyMaterialBottomNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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
      <Stack.Screen name="homeScreen" component={MyMaterialBottomNavigator} />
      <Stack.Screen name="applyLeaveForm" component={ApplyLeaveForm} />
      {/* <Stack.Screen name="Settings" component={SettingScreen}/> */}
      <Stack.Screen name="Requisitions" component={RequisitionScreen} />
      <Stack.Screen
        name="PurchaseOrderScreen"
        component={PurchaseOrderScreen}
      />
      <Stack.Screen name="FormScreen" component={FormScreen} />
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
      <Stack.Screen name="TaskList" component={TaskList} />
    </Stack.Navigator>
  );
}
