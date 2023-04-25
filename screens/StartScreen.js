import {
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import WeightInput from "../components/WeightInput";
import SearchFilter from "../components/SearchFilter";

const StartScreen = ({navigation}) => {
  function goToHandler() {
    navigation.navigate("Kategorier");
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View>
        <WeightInput />
        <SearchFilter />
        <Pressable style={{padding: 17}} onPress={goToHandler}>
          <Text style={{color: "white"}}>Or, view Categories</Text>
        </Pressable>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartScreen;

const styles = StyleSheet.create({});
