import { Tabs } from 'expo-router';
import colors from '../../../constants/colors';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
        tabBarStyle: {
            backgroundColor: colors.lightgreen
        }
    }}>
      <Tabs.Screen name="home" options={{ title: 'Home' }} />
      <Tabs.Screen name="total-points" options={{ title: 'Total Points' }} />
      <Tabs.Screen name="settings" options={{ title: 'Settings' }} />
    </Tabs>
  );
}