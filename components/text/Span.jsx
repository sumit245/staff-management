import { Text } from 'react-native-paper'

export default function H1({ style, children }) {

    return (
        <Text variant="labelMedium" style={style}>
            {children}
        </Text>
    )
}