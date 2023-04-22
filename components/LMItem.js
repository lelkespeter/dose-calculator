import {Pressable, StyleSheet, Text, View} from "react-native";
import React, {useContext, useEffect} from "react";
import {useNavigation, useRoute} from "@react-navigation/native";
import {AppContext} from "../context/AppContext";
import {DRUGS} from "../constants/data";

const LMItem = ({drugName, styrka, drugId}) => {
  const navigation = useNavigation();
  const route = useRoute();
  const {selectedDrugs, setSelectedDrugs} = useContext(AppContext);
  const katId = route.params.catId;

  const selectedDrug = DRUGS.filter((drug) => {
    return drug.catId.includes(katId);
  });

  function pressHandler() {
    setSelectedDrugs([...selectedDrugs, selectedDrug]);
  }

  useEffect(() => {
    console.log(selectedDrugs);
  }, [selectedDrugs]);

  return (
    <>
      <View style={styles.outerContainer}>
        <Pressable
          android_ripple={{color: "#ccc"}}
          style={({pressed}) => (pressed ? styles.buttonPressed : null)}
          onPress={pressHandler}
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
    backgroundColor: "white",
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
