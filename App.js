import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import MedicinesCategoriesScreen from "./screens/MedicinesCategoriesScreen";
import MedicinesInCategory from "./screens/MedicinesInCategory";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: "#022206"},
            headerTintColor: "#cccccc",
            contentStyle: {backgroundColor: "#04430c"},
          }}
        >
          <Stack.Screen
            name="Kategorier"
            component={MedicinesCategoriesScreen}
            options={{
              title: "Läkemedels Kategorier",
            }}
          />
          <Stack.Screen name="Drugs" component={MedicinesInCategory} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
});
