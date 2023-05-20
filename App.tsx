import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useCallback, useContext } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigator from "./navigation/MainStackNavigator";
import { MainProvider, MainContext } from "./contexts";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Mulish-Bold": require("./assets/fonts/static/Mulish-Bold.ttf"),
    "Mulish-SemiBold": require("./assets/fonts/static/Mulish-SemiBold.ttf"),
    "Mulish-Regular": require("./assets/fonts/static/Mulish-Regular.ttf"),
    "Mulish-ExtraBold": require("./assets/fonts/static/Mulish-ExtraBold.ttf"),
  });

  const { state, dispatch } = useContext(MainContext);
  const { theme } = state;

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const DefaultThemeConfig: any = {
    dark: theme === "dark",
    colors: {
      background: "#FFFFFF",
      buttonBgPrimary: "#F5F5F5",
      buttonTxtPrimary: "#0F1828",
      buttonBgSecondary: "#002DE3",
      buttonTxtSecondary: "#F7F7FC",
      inputBg: "#F7F7FC",
      inputTxt: "#0F1828",
      inputPlaceholder: "#B7B7B7",
      text: "#0F1828",
      border: "#EDEDED",
      contactImgBg: "#002DE3",
      contactImgTxt: "#F7F7FC",
    },
  };

  const DarkThemeConfig: any = {
    dark: theme === "dark",
    colors: {
      background: "#0F1828",
      buttonBgPrimary: "#F5F5F5",
      buttonTxtPrimary: "#0F1828",
      buttonBgSecondary: "#375FFF",
      buttonTxtSecondary: "#F7F7FC",
      inputBg: "#152033",
      inputTxt: "#F7F7FC",
      inputPlaceholder: "#B7B7B7",
      text: "#F7F7FC",
      border: "#152033",
      contactImgBg: "#375FFF",
      contactImgTxt: "#F7F7FC",
    },
  };

  return (
    <MainProvider>
      <SafeAreaProvider>
        <StatusBar style="auto" />
        <NavigationContainer
          theme={theme === "dark" ? DarkThemeConfig : DefaultThemeConfig}
        >
          <MainStackNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </MainProvider>
  );
}