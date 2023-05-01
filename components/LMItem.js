import {Pressable, StyleSheet, Text, View} from "react-native";
import React, {useContext, useEffect} from "react";
import {useNavigation} from "@react-navigation/native";

import {DRUGS} from "../constants/data";
import {AppContext} from "../context/AppContext";

const LMItem = ({drugName, styrka, drugId}) => {
  const {selectedDrugs, setSelectedDrugs} = useContext(AppContext);
  const navigation = useNavigation();

  function selectLmHandler() {
    navigation.navigate("List", {
      lmId: drugId,
    });
  }

  // function addSelectedDrug(drugId) {
  //   const selectedDrug = DRUGS.filter((drug) => drug.drugId === drugId);
  //   console.log("selectedDrug:", selectedDrug);

  //   setSelectedDrugs([...selectedDrugs, selectedDrug]);
  //   console.log("selectedDrug:", selectedDrug);
  // }
  function addSelectedDrug(drugId) {
    const selectedDrug = DRUGS.filter((drug) => drug.drugId === drugId);
    console.log("selectedDrug:", selectedDrug);

    setSelectedDrugs([...selectedDrugs, selectedDrug]);
    console.log("selectedDrugs:", selectedDrugs);
  }

  useEffect(() => {
    console.log("selectedDrugs:", selectedDrugs);
  }, [selectedDrugs]);

  return (
    <>
      <View style={styles.outerContainer}>
        <Pressable
          android_ripple={{color: "#ccc"}}
          style={({pressed}) => (pressed ? styles.buttonPressed : null)}
          onPress={() => addSelectedDrug(drugId)}
        >
          <View style={styles.innerContainer}>
            <Text style={styles.text}>{`${drugName} ${styrka}`}</Text>
          </View>
        </Pressable>
      </View>
    </>
  );
};

export default LMItem;

const styles = StyleSheet.create({
  outerContainer: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "#bdeacf",
    elevation: 4,
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },

  buttonPressed: {
    opacity: 0.5,
  },

  text: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
});
