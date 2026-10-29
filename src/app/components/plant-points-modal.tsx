import { Text, View } from "react-native"
import BoxContainer from "./box-container"

const PlantPointsModal = () => {
    return (
        <View className="items-center w-full">
            <BoxContainer className="w-[90%] my-16 px-10 py-6 items-center">
                <Text className="text-center text-2xl text-textDarkGreen pb-2">
                    Week xx Plant Points:
                </Text>
                 <Text className="text-center text-xl text-textDarkGreen">
                    xx/xx
                </Text>
            </BoxContainer>
        </View>
    )
}

export default PlantPointsModal