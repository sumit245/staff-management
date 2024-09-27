import { Text } from 'react-native-paper'

export default function H1({ style, children }) {

    return (
        <Text variant="titleMedium" style={style}>
            {children}
        </Text>
    )
}