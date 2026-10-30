import { Tabs } from 'expo-router';
import { Image } from "react-native";
import colors from '../../../constants/colors';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
        headerShown: true,
        headerStyle: { height: 100, backgroundColor: colors.screenBackGround },
        headerShadowVisible: false,
        headerTintColor: colors.textDarkGreen,
        headerTitle: "",
        headerLeft: () => (
          <Image
          source={require("@/assets/images/hevi-logo.png")}
          className="w-24 h-24 mb-4"
          />
        ),
        tabBarStyle: {
            backgroundColor: colors.lightgreen,
            borderTopWidth: 1,
            borderTopColor: colors.tabBarBorder,
        }
    }}>
      <Tabs.Screen name="home" options={{ title: 'Home' }} />
      <Tabs.Screen name="total-points" options={{ title: 'Total Points' }} />
      <Tabs.Screen name="settings" options={{ title: 'Settings' }} />
    </Tabs>
  );
}