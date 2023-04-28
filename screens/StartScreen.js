import {
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Alert,
} from "react-native";
import React, {useContext, useEffect, useState} from "react";
import WeightInput from "../components/WeightInput";
import SearchFilter from "../components/SearchFilter";
import {AppContext} from "../context/AppContext";
import Vikt from "../components/Vikt";

const StartScreen = ({navigation}) => {
  const {searchQuery, bodyWeight} = useContext(AppContext);
  function goToHandler() {
    if (!bodyWeight) {
      Alert.alert("Vikten måste anges!");
      return null;
    }
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

        <View>
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 19,
              fontWeight: "bold",
            }}
          >
            Vad vill du göra?
          </Text>
        </View>
        <SearchFilter />

        {searchQuery ? null : (
          <Pressable style={{padding: 17}} onPress={goToHandler}>
            <Text style={{color: "white", fontSize: 17, fontWeight: "bold"}}>
              2) Eller gå till Kategorierna
            </Text>
          </Pressable>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartScreen;

const styles = StyleSheet.create({});
