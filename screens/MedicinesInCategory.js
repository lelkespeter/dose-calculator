import {FlatList, StyleSheet, Text, View} from "react-native";
import React from "react";

import {DRUGS} from "../constants/data";
import LMItem from "../components/LMItem";
import {getDrugItemProps} from "../constants/DrugItemProps";

const MedicinesInCategory = ({route}) => {
  const katId = route.params.catId;

  const displayedDrugs = DRUGS.filter((drug) => {
    return drug.catId.includes(katId);
  });

  function renderDrugs(itemData) {
    const item = itemData.item;
    const drugItemProps = getDrugItemProps(item);
    return <LMItem {...drugItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedDrugs}
        keyExtractor={(item) => item.drugId}
        renderItem={renderDrugs}
      />
    </View>
  );
};

export default MedicinesInCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 17,
  },
});
