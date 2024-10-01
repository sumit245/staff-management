import { Text } from 'react-native-paper'

export default function H1({ style, children, ...props }) {

    return (
        <Text variant="headlineLarge" style={style} {...props}>
            {children}
        </Text>
    )
}