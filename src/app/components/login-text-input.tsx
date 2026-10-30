import { TextInput, View } from "react-native"

const LoginTextInput = () => {
    return (
        <View>
            <TextInput
                placeholder="Email"
                className="w-72 text-textDarkGreen"
            >
            </TextInput>
            <View className="border border-textDarkGreen my-2"/>
            <TextInput
                placeholder="Password"
            >
            </TextInput>
            <View className="border border-textDarkGreen my-2"/>
        </View>
    )
}

export default LoginTextInput