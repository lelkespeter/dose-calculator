import {FlatList, StyleSheet, Text, View} from "react-native";
import React from "react";

import {LMCategory} from "../constants/kategorier";
import CategoryItem from "../components/CategoryItem";

function kategoriRender(itemData) {
  return <CategoryItem catName={itemData.item.catName} />;
}

const MedicinesCategoriesScreen = () => {
  return (
    <View>
      <FlatList
        data={LMCategory}
        keyExtractor={(item) => item.catId}
        renderItem={kategoriRender}
      />
    </View>
  );
};

export default MedicinesCategoriesScreen;

const styles = StyleSheet.create({});
