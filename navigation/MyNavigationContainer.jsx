import MyStackNavigator from "./MyStackNavigator";
import { NavigationContainer } from "@react-navigation/native";

export default function MyNavigationContainer() {
    return (
        <NavigationContainer>
            <MyStackNavigator />
            
        </NavigationContainer>
    )
}