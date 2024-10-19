import { View, TextInput } from "react-native"
import { H5, H6 } from "../text"
import { styles } from "../../styles/components.styles"
import { PRIMARY_COLOR } from "../../styles/constant"


export default function MyTextInput({ title, onChangeText, type, ...props }) {
    return (
        <View style={styles.textInput}>
            <H5>{title}</H5>
            <TextInput
                onChangeText={onChangeText}
                keyboardType={type}
                style={styles.textInputField}
                cursorColor={ PRIMARY_COLOR }
                title
                value
                icon

                {...props}
            />
        </View>
    )
}