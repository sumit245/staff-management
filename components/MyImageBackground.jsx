import { Image, View } from 'react-native'
import ContainerComponent from './ContainerComponent'
import { layouts, spacing, styles } from '../styles'

export default function MyImageBackground({ children }) {
    return (
        <ContainerComponent>
            <Image
                source={require('../assets/Login.png')}
                style={[styles.imageContainerImg, spacing.mt5]}
                resizeMode='contain'
            />

            <View style={layouts.flex1}>
                {children}
            </View>
        </ContainerComponent>
    )
}