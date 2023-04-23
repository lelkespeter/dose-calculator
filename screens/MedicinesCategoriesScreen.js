import {FlatList, StyleSheet, Text, View} from "react-native";
import React from "react";

import {LMCategory} from "../constants/kategorier";
import CategoryItem from "../components/CategoryItem";

const MedicinesCategoriesScreen = ({navigation}) => {
  function kategoriRender(itemData) {
    function pressHandler() {
      navigation.navigate("Drugs", {
        catId: itemData.item.catId,
      });
    }
    return (
      <CategoryItem catName={itemData.item.catName} onPress={pressHandler} />
    );
  }

  return (
    <View>
      <FlatList
        data={LMCategory}
        keyExtractor={(item) => item.catId}
        renderItem={kategoriRender}
        numColumns={2}
      />
    </View>
  );
};

export default MedicinesCategoriesScreen;

const styles = StyleSheet.create({});
