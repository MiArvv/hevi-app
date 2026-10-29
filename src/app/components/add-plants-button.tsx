import { Pressable, Text, View } from "react-native";

type AddPlantsButtonProps = {
  onPress?: () => void
  buttonText: string
}

const AddPlantsButton = ({
    onPress,
    buttonText
}: AddPlantsButtonProps) => {
    return (
      <Pressable onPress={onPress}>
        <View className="border-4 border-borderGreen bg-buttonGreen rounded-full items-center justify-center w-40 h-40">
          <Text className="text-textDarkGreen text-2xl"> {buttonText} </Text>
        </View>
    </Pressable>  
    )
}

export default AddPlantsButton