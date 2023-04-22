import {StyleSheet, Text, View} from "react-native";
import React from "react";

const LmDetaljer = ({drugName, styrka, obs}) => {
  return (
    <>
      <View>
        <View>
          <Text style={{color: "white"}}>{`namn: ${drugName}`}</Text>
        </View>
        <View>
          <Text style={{color: "white"}}>{`styrka: ${styrka}`}</Text>
        </View>
        <View>
          <Text style={{color: "white"}}>{`obs: ${obs}`}</Text>
        </View>
      </View>
    </>
  );
};

export default LmDetaljer;

const styles = StyleSheet.create({});
