import { Text, View } from "react-native"
import BoxContainer from "./box-container"

const PlantPointsModal = () => {
    return (
        <View className="items-center w-full">
            <BoxContainer className="items-center">
                <Text className="text-center text-2xl">
                    Week xx Plant Points:
                </Text>
                 <Text className="text-center text-xl">
                    xx/xx
                </Text>
            </BoxContainer>
        </View>
    )
}

export default PlantPointsModal