import {StyleSheet, Text, TextInput, View} from "react-native";
import React, {useContext} from "react";

import {GlobalStyles} from "../constants/appColors";
import {AppContext} from "../context/AppContext";

const WeightInput = () => {
  const {bodyWeight, weightInputHandler} = useContext(AppContext);
  return (
    <>
      <View style={{marginVertical: 21}}>
        <View>
          <Text style={styles.text}>Vikten i kg :</Text>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={weightInputHandler}
          value={bodyWeight}
          placeholder="Vikten i kg"
          placeholderTextColor="#02200e"
          keyboardType="decimal-pad"
        />
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
    marginHorizontal: 22,
    borderWidth: 1,
    borderRadius: 7,
    backgroundColor: "#bdeacf",
    padding: 10,
    color: "green",
    fontSize: 17,
    fontWeight: "bold",
  },
  text: {
    color: GlobalStyles.colors.vit,
    textAlign: "center",
    fontSize: 17,
  },
});
