import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {GlobalStyles} from "../constants/appColors";
import SelectedDrugDetails from "../components/SelectedDrugDetails";

const ValdaMedicinerScreen = () => {
  return (
    <View style={styles.c}>
      <Text style={styles.t}>Valda Mediciner Lista</Text>
      <SelectedDrugDetails />
    </View>
  );
};

export default ValdaMedicinerScreen;

const styles = StyleSheet.create({
  c: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  t: {
    color: GlobalStyles.colors.vit,
    fontSize: 17,
  },
});
