import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Login from "./src/pages/auth/Login";
import { useFonts } from "expo-font";
import AppLoading from "./src/components/AppLoading";
import BottomNav from "./src/navigation/BottomNavigation";

export default function App() {
  const [fontsLoaded] = useFonts({
    Blink: require("./assets/fonts/Blink.ttf"),
    "Billa-Bong": require("./assets/fonts/Billabong.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <SafeAreaView className="flex-1">
      <StatusBar style="auto" />
      <NavigationContainer>
        <BottomNav />
      </NavigationContainer>
      {/* <Login /> */}
    </SafeAreaView>
  );
}
