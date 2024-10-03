import { Text } from 'react-native-paper'

export default function H1({ style, children, ...props }) {

    return (
        <Text variant="titleMedium" style={style}
            {...props}
        >
            {children}
        </Text>
    )
}


