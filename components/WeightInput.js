import {StyleSheet, Text, TextInput, View} from "react-native";
import React, {useContext} from "react";

import {AppContext} from "../context/AppContext";

const WeightInput = () => {
  const {weight, weightInputHandler} = useContext(AppContext);
  return (
    <>
      <TextInput
        style={styles.input}
        onChangeText={weightInputHandler}
        value={weight}
        placeholder="vikt i Kg"
        keyboardType="decimal-pad"
      />
      <View style={{marginVertical: 7}}>
        <Text style={{color: "white"}}>{weight}</Text>
      </View>
    </>
  );
};

export default WeightInput;

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginTop: 3,
    marginBottom: 11,
    marginHorizontal: 17,
    borderWidth: 1,
    backgroundColor: "white",
    padding: 10,
  },
});
