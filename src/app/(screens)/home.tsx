import { ScrollView, Text, View } from "react-native"
import Container from "../components/container"

const HomeScreen = () => {
  return (
    <Container>
      <ScrollView className="flex-1" contentContainerClassName="items-center">
        <View className="items-center pb-12">
          <Text className="text-5xl text-textGreen">Hello User!</Text>
        </View>
        <View className="w-[75%] items-center">
          <Text className="text-2xl text-textGreen text-center">You have eaten a day's worth of plants:</Text>
        </View>
      </ScrollView>
    </Container>
  )
}

export default HomeScreen