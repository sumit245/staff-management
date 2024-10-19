import 'react-native-gesture-handler'   //Don't ever remove this line
import { PaperProvider } from "react-native-paper";
import MyNavigationContainer from './navigation/MyNavigationContainer';
import ApplyLeaveForm from './screens/ApplyLeaveForm';
import AllLeaves from './screens/AllLeaves';
import CheckOut from './screens/CheckOut';
import Work from './screens/Work';
import LineItemScreen from './screens/LineItemScreen';


export default function App() {
    return (
        <PaperProvider>
            {/* <MyNavigationContainer /> */}
            {/* { <ApplyLeaveForm />  } 
        {/* {<AllLeaves/>}  */}
            {/* {< CheckOut/>}  */}
            {/* {<Work/>}  */ }
            <LineItemScreen/>
 
        </PaperProvider>

    )
}

// Wrap
