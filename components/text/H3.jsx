import { Text } from 'react-native-paper'

export default function H1({ style, children }) {

    return (
        <Text variant="headlineSmall" style={style}>
            {children}
        </Text>
    )
}