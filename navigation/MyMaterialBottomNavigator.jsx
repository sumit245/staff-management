import DashboardScreen from '../screens/DashboardScreen'
import ChatScreen from '../screens/ChatScreen'
import SettingsScreen from '../screens/SettingScreen'
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation'
import { INFO_COLOR, LIGHT, PRIMARY_COLOR } from '../styles/constant'
import Icon from 'react-native-vector-icons/Ionicons'

const BottomTab = createMaterialBottomTabNavigator()

export default function MyMaterialBottomNavigator() {
    return (
        <BottomTab.Navigator
            initialRouteName='dashboardScreen'
            activeColor={PRIMARY_COLOR}
            inactiveColor={INFO_COLOR}
            activeIndicatorStyle={{ backgroundColor: 'transparent', }}
            barStyle={{
                backgroundColor: LIGHT,
                height: 70,
                borderTopWidth: 0.5,
                borderTopColor: '#6c6c6c',
                paddingTop: 0,
                // paddingBottom: 48
            }}
        >
            <BottomTab.Screen
                name='dashboardScreen'
                component={DashboardScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) =>
                        <Icon name="grid-outline" size={26} color={color} />
                }}
            />
            <BottomTab.Screen
                name='chatScreen'
                component={ChatScreen}
                options={{
                    tabBarLabel: 'Chats',
                    tabBarBadge: '10',
                    tabBarIcon: ({ color }) =>
                        <Icon name="chatbubbles-outline" size={26} color={color} />
                }}
            />
            <BottomTab.Screen
                name='settingsScreen'
                component={SettingsScreen}
                options={{
                    tabBarLabel: 'Me',
                    tabBarIcon: ({ color }) =>
                        <Icon name="person-outline" size={26} color={color} />
                }}
            />
        </BottomTab.Navigator>
    )
}