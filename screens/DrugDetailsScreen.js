import {StyleSheet, Text, View} from "react-native";
import React, {useContext} from "react";
import {DRUGS} from "../constants/data";
import LmDetaljer from "../components/LmDetaljer";
import {SelectedDrugProps} from "../constants/SelectedDrugProps";
import {AppContext} from "../context/AppContext";

const DrugDetailsScreen = ({route}) => {
  const {bodyWeight} = useContext(AppContext);
  const lmId = route.params.lmId;

  const selectedDrug = DRUGS.find((drug) => {
    return drug.drugId === lmId;
  });

  const selectedProps = SelectedDrugProps(selectedDrug);

  return (
    <>
      <View style={styles.textC}>
        <Text style={styles.text}>{`Beräknat för ${bodyWeight} kg`}</Text>
      </View>
      <View style={styles.detalj}>
        <LmDetaljer {...selectedProps} selectedDrug={selectedDrug} />
      </View>
    </>
  );
};

export default DrugDetailsScreen;

const styles = StyleSheet.create({
  textC: {
    padding: 13,
    marginTop: 7,
  },
  text: {
    color: "#ccc",
    fontSize: 17,
  },
  detalj: {
    marginTop: 3,
  },
});
