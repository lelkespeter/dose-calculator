import {StyleSheet, Text, View} from "react-native";
import React from "react";
import WeightInput from "../components/WeightInput";
import SearchFilter from "../components/SearchFilter";

const StartScreen = () => {
  return (
    <>
      <WeightInput />
      <SearchFilter />
    </>
  );
};

export default StartScreen;

const styles = StyleSheet.create({});
