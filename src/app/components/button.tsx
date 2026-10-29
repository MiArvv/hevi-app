import { Pressable, Text, View } from "react-native";

type ButtonProps = {
  onPress?: () => void
  buttonText: string
}

const Button = ({
    onPress,
    buttonText
}: ButtonProps) => {
    return (
      <Pressable onPress={onPress}>
        <View className="border-2 border-borderGreen bg-buttonGreen rounded-xl items-center justify-center w-32 h-11">
          <Text className="text-textDarkGreen"> {buttonText} </Text>
        </View>
    </Pressable>  
    )
}

export default Button