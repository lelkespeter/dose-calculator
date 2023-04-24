import {StyleSheet, Text, View, TextInput} from "react-native";
import React from "react";

const SearchFilter = () => {
  return (
    <>
      <View>
        <View style={{marginVertical: 9, paddingLeft: 21}}>
          <Text style={{color: "white"}}>Välj läkemedel</Text>
        </View>
        <View>
          <TextInput
            style={styles.input}
            onChangeText={() => {}}
            //   value={}
            placeholder="Vilket läkemedel?"
            placeholderTextColor="#02200e"
            autoCapitalize="words"
            autoCorrect={false}
          />
        </View>
      </View>
    </>
  );
};

export default SearchFilter;
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
});
