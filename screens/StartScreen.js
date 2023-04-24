import {Pressable, StyleSheet, Text, View} from "react-native";
import React from "react";
import WeightInput from "../components/WeightInput";
import SearchFilter from "../components/SearchFilter";

const StartScreen = ({navigation}) => {
  function goToHandler() {
    navigation.navigate("Kategorier");
  }
  return (
    <>
      <WeightInput />
      <SearchFilter />
      <View>
        <Pressable style={{padding: 17}} onPress={goToHandler}>
          <Text style={{color: "white"}}>Eller, visa Kategorier</Text>
        </Pressable>
      </View>
    </>
  );
};

export default StartScreen;

const styles = StyleSheet.create({});
