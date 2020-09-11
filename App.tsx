import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Onbording from "./src/Authentication/Onbording";
import TabBar from "./src/TabBar";
import PanGesture from "./src/PanGestureAnimation";

const AutheticationStack = createStackNavigator();

const AuthenticationNavigator = () => {
  return (
    <AutheticationStack.Navigator headerMode="none">
      <AutheticationStack.Screen name="Onbording" component={Onbording} />
    </AutheticationStack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <PanGesture />
    </NavigationContainer>
  );
}
