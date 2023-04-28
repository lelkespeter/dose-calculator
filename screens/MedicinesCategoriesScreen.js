import {FlatList, StyleSheet, Text, View} from "react-native";
import React, {useContext, useEffect} from "react";

import {LMCategory} from "../constants/kategorier";
import CategoryItem from "../components/CategoryItem";
import WeightInput from "../components/WeightInput";
import PleaseEnterWeight from "../components/PleaseEnterWeight";
import {AppContext} from "../context/AppContext";
import Vikt from "../components/Vikt";

const MedicinesCategoriesScreen = ({navigation}) => {
  const {bodyWeight, show, setShow} = useContext(AppContext);

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
    <>
      <Vikt />

      <View>
        <FlatList
          data={LMCategory}
          keyExtractor={(item) => item.catId}
          renderItem={kategoriRender}
          numColumns={2}
        />
      </View>
    </>
  );
};

export default MedicinesCategoriesScreen;

const styles = StyleSheet.create({
  // viktC: {
  //   flexDirection: "row",
  //   // alignItems: "center",
  //   justifyContent: "center",
  // },
});
