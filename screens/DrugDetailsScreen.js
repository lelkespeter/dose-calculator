import {StyleSheet, Text, View} from "react-native";
import React, {useContext} from "react";
import {DRUGS} from "../constants/data";
import LmDetaljer from "../components/LmDetaljer";
import {SelectedDrugProps} from "../constants/SelectedDrugProps";
import {AppContext} from "../context/AppContext";

const DrugDetailsScreen = ({route}) => {
  const lmId = route.params?.lmId;
  // const selectedDrugs = route.params.selectedDrugs;

  const {selectedDrugs} = useContext(AppContext);

  const selectedDrug = selectedDrugs.find((drug) => {
    return drug.drugId === lmId;
  });

  const selectedProps = SelectedDrugProps(selectedDrug);

  return (
    <View style={{marginVertical: 44}}>
      <LmDetaljer {...selectedProps} selectedDrug={selectedDrug} />
    </View>
  );
};

export default DrugDetailsScreen;

const styles = StyleSheet.create({});
