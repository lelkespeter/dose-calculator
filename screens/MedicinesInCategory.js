import {FlatList, StyleSheet, Text, View} from "react-native";
import React, {useLayoutEffect} from "react";

import {DRUGS} from "../constants/data";
import {LMCategory} from "../constants/kategorier";
import LMItem from "../components/LMItem";
import {getDrugItemProps} from "../constants/DrugItemProps";

const MedicinesInCategory = ({route, navigation}) => {
  const katId = route.params.catId;

  const displayedDrugs = DRUGS.filter((drug) => {
    return drug.catId.includes(katId);
  });
  const sortedDrugs = displayedDrugs.sort((a, b) =>
    a.drugName.localeCompare(b.drugName)
  );

  useLayoutEffect(() => {
    const katTitel = LMCategory.find((kat) => kat.catId === katId).catName;

    navigation.setOptions({
      title: katTitel,
    });
  }, [katId, navigation]);

  function renderDrugs(itemData) {
    const item = itemData.item;
    const drugItemProps = getDrugItemProps(item);
    return <LMItem {...drugItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={sortedDrugs}
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
