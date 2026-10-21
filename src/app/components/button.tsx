import { Pressable, Text, View } from "react-native";

type ButtonProps = {
  onPress?: () => void;
}

const Button = ({
    onPress,
}: ButtonProps) => {
    return (
        <View>
      <Pressable onPress={onPress}>
        <Text> Button</Text>
      </Pressable>
    </View>
    )
}

export default Button