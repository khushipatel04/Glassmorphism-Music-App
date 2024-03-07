const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import SplashScreen from "./screens/SplashScreen";
import HomeScreen from "./screens/HomeScreen";
import ExploreScreen from "./screens/ExploreScreen";
import MusicScreen from "./screens/MusicScreen";
import ShapeSquareCategorieMeditaImage from "./components/ShapeSquareCategorieMeditaImage";
import DarkModeFalse from "./components/DarkModeFalse";
import DarkModeTrue from "./components/DarkModeTrue";
import CategoryMusicSizeSmall from "./components/CategoryMusicSizeSmall";
import DarkModeFalseTypeDefault from "./components/DarkModeFalseTypeDefault";
import ShapeRoundTopLeftColorSt1 from "./components/ShapeRoundTopLeftColorSt1";
import DarkModeTrueStylePause from "./components/DarkModeTrueStylePause";
import DarkModeFalse1 from "./components/DarkModeFalse1";
import AirplayAudio from "./components/AirplayAudio";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ExploreScreen"
              component={ExploreScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MusicScreen"
              component={MusicScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
