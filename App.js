import 'react-native-gesture-handler'   //Don't ever remove this line
import { PaperProvider } from "react-native-paper";
import MyNavigationContainer from './navigation/MyNavigationContainer';
import ApplyLeaveForm from './screens/ApplyLeaveForm';
import AllLeaves from './screens/AllLeaves'
import MyProfile from './screens/MyProfle'

export default function App() {
    return (
        <PaperProvider>
            {/* <MyNavigationContainer /> */}
            {/* <ApplyLeaveForm /> */ }
            {<MyProfile/>}
        </PaperProvider>

    )
}

// Wrap
