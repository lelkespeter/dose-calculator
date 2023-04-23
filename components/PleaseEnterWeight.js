import {StyleSheet, Text, View} from "react-native";
import React from "react";
import WeightInput from "./WeightInput";

const PleaseEnterWeight = () => {
  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>Du behöver ange vikten:</Text>
        </View>

        <View>
          <WeightInput />
        </View>
      </View>
    </>
  );
};

export default PleaseEnterWeight;

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
