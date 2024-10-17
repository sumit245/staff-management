import LoginScreen from "../screens/LoginScreen";
import ApplyLeaveForm from "../screens/ApplyLeaveForm";
import SettingScreen from "../screens/SettingScreen";
import RequisitionScreen from "../screens/RequisitionScreen";
import PurchaseOrderScreen from "../screens/PurchaseOrderScreen";
import FormScreen from "../screens/FormScreen";
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
    </Stack.Navigator>
  );
}
