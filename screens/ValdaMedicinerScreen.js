import {FlatList, StyleSheet, Text, View} from "react-native";
import React, {useContext} from "react";
import {GlobalStyles} from "../constants/appColors";
import {SelectedDrugProps} from "../constants/SelectedDrugProps";

import {AppContext} from "../context/AppContext";
import LmDetaljer from "../components/LmDetaljer";

const ValdaMedicinerScreen = () => {
  const {selectedDrugs} = useContext(AppContext);

  // function renderCards(itemData) {
  //   const item = itemData.item;
  //   if (!selectedDrugs || selectedDrugs.length === 0) {
  //     return null;
  //   }
  //   const drugItemProps = SelectedDrugProps(selectedDrugs[0]);
  //   return <LmDetaljer {...drugItemProps} />;
  // }

  function renderCards(itemData) {
    const item = itemData.item;
    const drugItemProps = SelectedDrugProps(selectedDrugs);

    if (!drugItemProps) {
      return null;
    }

    return <LmDetaljer {...drugItemProps} />;
  }

  return (
    <View>
      <Text style={styles.t}>Valda mediciner:</Text>
      <FlatList
        data={selectedDrugs}
        keyExtractor={(item) => item.drugId}
        renderItem={renderCards}
      />
    </View>
  );
};

export default ValdaMedicinerScreen;

const styles = StyleSheet.create({
  c: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  t: {
    color: GlobalStyles.colors.vit,
    fontSize: 17,
  },
});
