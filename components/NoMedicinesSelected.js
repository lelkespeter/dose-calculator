import {StyleSheet, Text, View} from "react-native";
import React from "react";

const NoMedicinesSelected = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No Medicines Selected</Text>
    </View>
  );
};

export default NoMedicinesSelected;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "red",
    fontSize: 17,
    fontWeight: "bold",
  },
});
