import {FlatList, StyleSheet, Pressable, Text, View} from "react-native";
import React, {useContext, useEffect, useLayoutEffect} from "react";

import {DRUGS} from "../constants/data";
import {LMCategory} from "../constants/kategorier";
import LMItem from "../components/LMItem";
import {getDrugItemProps} from "../constants/DrugItemProps";
import {AppContext} from "../context/AppContext";

const MedicinesInCategory = ({route, navigation}) => {
  const catId = route.params.catId;
  const {selectedDrugs, setSelectedDrugs} = useContext(AppContext);

  const displayedDrugs = DRUGS.filter((drug) => {
    return drug.catId.includes(catId);
  });
  const sortedDrugs = displayedDrugs.sort((a, b) =>
    a.drugName.localeCompare(b.drugName)
  );

  console.log("selectedDrugs before:", selectedDrugs);
  useEffect(() => {
    console.log("selectedDrugs", selectedDrugs);
  }, [selectedDrugs]);

  useLayoutEffect(() => {
    const catTitle = LMCategory.find((cat) => cat.catId === catId).catName;

    navigation.setOptions({
      title: catTitle,
    });
  }, [catId, navigation]);

  function renderDrugs(itemData) {
    const item = itemData.item;
    const drugItemProps = getDrugItemProps(item);
    return (
      <LMItem
        {...drugItemProps}
        onPress={() => {
          setSelectedDrugs((prevSelectedDrugs) => [...prevSelectedDrugs, item]);
        }}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={sortedDrugs}
        keyExtractor={(item) => item.drugId}
        renderItem={renderDrugs}
      />
      <Pressable
        onPress={() =>
          navigation.navigate("List", {
            selectedDrugs: selectedDrugs,
          })
        }
      >
        <Text>Selected Drugs</Text>
      </Pressable>
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
