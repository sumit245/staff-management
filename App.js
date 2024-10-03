import "react-native-gesture-handler"; //Don't ever remove this line
import { PaperProvider } from "react-native-paper";
import MyNavigationContainer from "./navigation/MyNavigationContainer";
import PrivacyPolicy from "./screens/PrivacyPolicy";
import TermsAndConditions from "./screens/TermsAndConditions";

export default function App() {
  return (
    //   <PaperProvider>
    //     <MyNavigationContainer />
    //   </PaperProvider>
    // );

    <PrivacyPolicy />
    // <TermsAndConditions />
  );
}

// Wrap
