import { View, Text } from 'react-native'
import React, {useEffect} from "react";
import { Slot, Stack, SplashScreen} from "expo-router";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync()
const RootLayout = () => {
    const [fontsLoaded, error] = useFonts({
      "BadScript-Regular": require("../assets/fonts/BadScript-Regular.ttf"),
      "TT-Norms-Pro-Black": require("../assets/fonts/TT-Norms-Pro-Black.otf"),
      "TT-Norms-Pro-Bold": require("../assets/fonts/TT-Norms-Pro-Bold.otf"),
      "TT-Norms-Pro-ExtraBold": require("../assets/fonts/TT-Norms-Pro-ExtraBold.otf"),
      "TT-Norms-Pro-ExtraLight": require("../assets/fonts/TT-Norms-Pro-ExtraLight.otf"),
      "TT-Norms-Pro-Light": require("../assets/fonts/TT-Norms-Pro-Light.otf"),
      "TT-Norms-Pro-Medium": require("../assets/fonts/TT-Norms-Pro-Medium.otf"),
      "TT-Norms-Pro-Regular": require("../assets/fonts/TT-Norms-Pro-Regular.otf"),
      "TT-Norms-Pro-Thin": require("../assets/fonts/TT-Norms-Pro-Thin.otf"),
      "Brandon_Grotesque_black": require("../assets/fonts/Brandon_Grotesque_black.otf"),
      "Brandon_Grotesque_bold": require("../assets/fonts/Brandon_Grotesque_bold.otf"),
      "Brandon_Grotesque_light": require("../assets/fonts/Brandon_Grotesque_light.otf"),
      "Brandon_Grotesque_medium": require("../assets/fonts/Brandon_Grotesque_medium.otf"),
      "Brandon_Grotesque_regular": require("../assets/fonts/Brandon_Grotesque_black.otf"),
      "Brandon_Grotesque_thin": require("../assets/fonts/Brandon_Grotesque_thin.otf")
    });
    
    useEffect(() => {
      if (error) throw error;
    
      if (fontsLoaded) {
        SplashScreen.hideAsync();
      }
    }, [fontsLoaded, error]);
    
    if (!fontsLoaded && !error) {
      return null;
    }
    return (
        <Stack>
            <Stack.Screen name="index" options={{headerShown: false}}/>
            <Stack.Screen name="(auth)" options={{headerShown: false}}/>
            <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
        </Stack>
    );
  };
  

export default RootLayout