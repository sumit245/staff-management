import { Image, View } from 'react-native'
import ContainerComponent from './ContainerComponent'
import { styles } from '../styles/components.styles'

export default function MyImageBackground({ children }) {
    return (
        <ContainerComponent>
            <Image
                source={require('../assets/Login.png')}
                style={styles.imageContainerImg}
                resizeMode='cover'
            />

            <View style={styles.imageContainer}>
                {children}
            </View>
        </ContainerComponent>
    )
}