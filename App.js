import 'react-native-gesture-handler'   //Don't ever remove this line
import { PaperProvider } from "react-native-paper";
import MyNavigationContainer from './navigation/MyNavigationContainer';
import ApplyLeaveForm from './screens/ApplyLeaveForm';
import AllLeaves from './screens/AllLeaves';
import CheckOut from './screens/CheckOut';


export default function App() {
    return (
        <PaperProvider>
            {/* <MyNavigationContainer /> */}
            {/* { <ApplyLeaveForm />  } */ }
            {/* {<AllLeaves/>} */ }
            {/* {< CheckoutButton/>} */ }
            {<CheckOut/>}
          
        </PaperProvider>

    )
}

// Wrap
