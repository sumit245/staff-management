import { TextInput } from 'react-native'
import { styles } from '../../styles/components.styles'
import { PRIMARY_COLOR } from '../../styles/constant'

export default function EllipticalInput({ placeholder, value, onChangeText }) {
    return (
        <TextInput
            style={[styles.border, styles.round, styles.bgPrimaryTransParent, { flex: 1, marginHorizontal: 4, height: 48, paddingLeft: 20, fontSize: 16 }]}
            placeholder={placeholder}
            value={value}
            cursorColor={PRIMARY_COLOR}
            onChangeText={onChangeText}
        />
    )
}