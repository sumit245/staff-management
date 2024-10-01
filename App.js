// import DashboardScreen from "./screens/DashboardScreen";
// import LoginScreen from "./screens/LoginScreen";
// import CardTask from "./components/card/CardTask";
import CardGrid from "./components/CardGrid";
import ContactList from "./components/ContactList";
import SettingsScreen from "./screens/SettingScreen";
import CustomCheckbox from "./components/input/CustomCheckbox";
import ContainerComponent from "./components/ContainerComponent";
// import TextInputIcon from "./components/TextInputIcon";
import { PaperProvider } from "react-native-paper";
import { styles } from "./styles/components.styles";
import { H2 } from "./components/text";
import DataTableTitle from "./components/table/DataTableTitle";
// import AvatarIcon from "./components/AvatarIcon";
// import DataTableCell from "./components/Table/DataTableCell";
// import LoginScreen from "./screens/LoginScreen"

// import DataTableTitle from "./components/Table/DataTableTitle";

const App = () => (
    <ContainerComponent>
        <PaperProvider>
            <DataTableTitle />
        </PaperProvider>
    </ContainerComponent>
);

export default App;
