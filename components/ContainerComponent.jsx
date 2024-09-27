import { SafeAreaView, StatusBar } from 'react-native'
import { styles } from '../styles/components.styles'
import { PRIMARY_COLOR } from '../styles/constant'


export default function ContainerComponent({ children }) {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            {children}
        </SafeAreaView>
    )
}