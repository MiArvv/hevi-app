import { ScrollView, Text, View } from "react-native"
import AddPlantsButton from "../components/add-plants-button"
import Container from "../components/container"
import PlantPointsModal from "../components/plant-points-modal"

const HomeScreen = () => {
  return (
    <Container>
      <ScrollView className="flex-1" contentContainerClassName="items-center">
        <View className="items-center pb-12">
          <Text className="text-5xl text-textGreen">Hello User!</Text>
        </View>
        <View className="w-full items-center pb-14">
          <Text className="text-2xl text-textGreen text-center">You have eaten a day's worth of plants:</Text>
        </View>
        <AddPlantsButton buttonText={"Add Plants"}></AddPlantsButton>
        <PlantPointsModal>
            
        </PlantPointsModal>
      </ScrollView>
    </Container>
  )
}

export default HomeScreen