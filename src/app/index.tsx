import { useRouter } from "expo-router";
import { ScrollView, Text } from "react-native";
import BoxContainer from "./components/box-container";
import Button from "./components/button";
import Container from "./components/container";

const LoginScreen = () => {
  const router = useRouter();
  return (
    <Container>
      <ScrollView className="flex-1" contentContainerClassName="items-center">
        <BoxContainer className="w-[90%] my-16 px-10 py-6">
          <Text className="text-3xl text-center text-textDarkGreen pb-6">Welcome to heVi!</Text>
          <Text className="text-xl text-center text-textDarkGreen">App created to help people to eat more plants</Text>
        </BoxContainer>
        <BoxContainer className="w-[90%] my-16 px-10 py-6 items-center">
          <Button
          onPress={() => router.push("/(screens)/home")}
          buttonText="Login">
          </Button>
        </BoxContainer>  
      </ScrollView>
    </Container>
  )
}

export default LoginScreen