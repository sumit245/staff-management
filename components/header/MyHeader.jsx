import { View } from 'react-native'
import { H2 } from '../text'
import Icon from 'react-native-vector-icons/Ionicons'
import { Badge } from 'react-native-paper'
import { styles } from '../../styles/components.styles'

export default function MyHeader({ title, hasIcon, icon, badgeCount }) {
    return (
        <View style={styles.headerStyle}>
            <H2 style={styles.titleText}>{title}</H2>
            {
                hasIcon && <View style={{ height: 54, width: 54 }}>
                    <Icon name={icon} size={30} style={{ position: 'absolute', top: 10, left: 14 }} />
                    <Badge style={{ position: 'absolute', top: 7, right: 7 }}>{badgeCount}</Badge>
                </View>
            }
        </View>
    )
}