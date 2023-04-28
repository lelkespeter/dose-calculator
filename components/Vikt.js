import {StyleSheet, Text, View} from "react-native";
import React, {useContext} from "react";
import {AppContext} from "../context/AppContext";

const Vikt = () => {
  const {bodyWeight} = useContext(AppContext);
  return (
    <View style={{marginVertical: 7}}>
      <Text style={styles.text}>Vikt: {bodyWeight} kg</Text>
    </View>
  );
};

export default Vikt;

const styles = StyleSheet.create({
  text: {
    color: "#ffffff",
    fontSize: 17,
    textAlign: "center",
  },
});
