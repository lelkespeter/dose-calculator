import {StyleSheet, Text, View} from "react-native";
import React from "react";
import DoseInMl from "../villkor/DoseInMl";
import QuantityToGive from "../villkor/QuantityToGive";

const LmDetaljer = ({drugName, styrka, selectedDrugs}) => {
  const ml = DoseInMl(selectedDrugs);

  const dos = QuantityToGive(selectedDrugs);

  return (
    <>
      <View style={styles.container}>
        <View style={{marginVertical: 3}}>
          <Text
            style={{color: "white", fontSize: 17}}
          >{`${drugName} ${styrka}`}</Text>
        </View>
        <View>
          <Text style={{color: "white"}}>{dos}</Text>
        </View>
        <View>
          <Text style={{color: "white"}}> {ml}</Text>
        </View>
        <View>
          {selectedDrugs.recept ? (
            <Text style={{color: "white"}}>
              Spädning: {selectedDrugs.recept}
            </Text>
          ) : null}
        </View>
        <View>
          {selectedDrugs.obs ? (
            <Text style={{color: "red", fontSize: 16, fontWeight: "bold"}}>
              OBS: {selectedDrugs.obs}
            </Text>
          ) : null}
        </View>
      </View>
    </>
  );
};

export default LmDetaljer;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 37,
    borderWidth: 0.5,
    borderColor: "white",
    paddingTop: 10,
    paddingHorizontal: 15,
    paddingBottom: 8,
  },
});
