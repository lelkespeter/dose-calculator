import {StyleSheet, Text, View} from "react-native";
import React from "react";

import {DRUGS} from "../constants/data";
import DoseInMl from "../villkor/DoseInMl";
import QuantityToGive from "../villkor/QuantityToGive";

const DrugDetails = ({route}) => {
  const drugId = route.params.drugId;

  const seledtedDrugs = DRUGS.find((lm) => lm.drugId === drugId);

  const strength = seledtedDrugs.styrka.charAt(seledtedDrugs.styrka.length - 5);
  const ml = DoseInMl(seledtedDrugs);
  const dos = QuantityToGive(seledtedDrugs);

  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={{color: "white"}}>
            {seledtedDrugs.drugName} {seledtedDrugs.styrka}
          </Text>
        </View>
        <View>
          <Text style={{color: "white"}}>{dos}</Text>
        </View>
        <View>
          <Text style={{color: "white"}}> {ml}</Text>
        </View>
        <View>
          {seledtedDrugs.recept ? (
            <Text style={{color: "white"}}>
              Spädning: {seledtedDrugs.recept}
            </Text>
          ) : null}
        </View>
        <View>
          {seledtedDrugs.obs ? (
            <Text style={{color: "red", fontSize: 16, fontWeight: "bold"}}>
              OBS: {seledtedDrugs.obs}
            </Text>
          ) : null}
        </View>
      </View>
    </>
  );
};
export default DrugDetails.js;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    marginVertical: 9,
    marginHorizontal: 22,
  },
});
