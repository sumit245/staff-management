import DashboardScreen from "./screens/DashboardScreen";
import LoginScreen from "./screens/LoginScreen";
import ApplyLeaveForm from "./screens/ApplyLeaveForm";
import Button from "./components/buttons/Button";
import ContainerComponent from "./components/ContainerComponent";
import { H2, H5 } from "./components/text";
import { styles } from "./styles/components.styles";
import Icon from "react-native-vector-icons/Ionicons";





const App = () => {
    return (
        <ContainerComponent>
            <Button style={[styles.btn, styles.bgPrimary]}>
                <H2 style={[styles.btnText, styles.textLight]}>Simple Button</H2>
            </Button>
            <Button style={[styles.btn, styles.border]}>
                <H2 style={styles.btnText}>Outlined Button</H2>
            </Button>
            <Button style={[styles.btn, styles.round, styles.border, styles.bgDanger]}>
                <H2 style={[styles.btnText, styles.textLight]}>OB</H2>
            </Button>
            <Button style={[styles.btn, styles.round, styles.border, styles.bgDanger]}>
                <Icon name="camera" style={styles.textLight} size={28} />
            </Button>
            <Button style={[styles.btn, styles.border, styles.bgDanger]}>
                <Icon name="camera" style={styles.textLight} size={28} />
                <H2 style={[styles.btnText, styles.textLight]}>OB</H2>
            </Button>


        </ContainerComponent>
    )
}



export default App;
