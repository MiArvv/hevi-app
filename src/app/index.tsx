import { useRouter } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import Button from "./components/button";
import Container from "./components/container";

const LoginScreen = () => {
  const router = useRouter();
  return (
    <Container>
      <ScrollView className="flex-1" contentContainerClassName="items-center">
        <View className="items-center pb-12">
          <Text className="text-5xl text-textGreen">Welcome to heVi!!</Text>
        </View>
        <View className="w-[75%] items-center">
          <Button
          onPress={() => router.push("/(screens)/home")}>
            
          </Button>
        </View>
      </ScrollView>
    </Container>
  )
}

export default LoginScreen