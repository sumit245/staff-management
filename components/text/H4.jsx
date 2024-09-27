import { Text } from 'react-native-paper'

export default function H1({ style, children }) {

    return (
        <Text variant="titleLarge" style={style}>
            {children}
        </Text>
    )
}