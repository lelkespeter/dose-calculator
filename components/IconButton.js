import {Pressable, StyleSheet, Text, View} from "react-native";
import React from "react";

import {MaterialCommunityIcons} from "@expo/vector-icons";

const IconButton = ({onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <MaterialCommunityIcons name="clipboard-list" size={24} color="white" />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({});
