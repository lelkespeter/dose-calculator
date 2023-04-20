import {
  TouchableOpacity,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, {useContext} from "react";
import {DRUGS} from "../constants/data";
import {useNavigation} from "@react-navigation/native";
import {AppContext} from "../context/AppContext";

const DrugItem = ({drugName, styrka, id}) => {
  const navig = useNavigation();
  const {handleDrugClick} = useContext(AppContext);

  function selectHandler() {
    navig.navigate("Valda", {
      drugId: id,
    });
  }

  // return (
  // <>
  //   <View style={styles.outerContainer}>
  //     <Pressable
  //       android_ripple={{color: "#ccc"}}
  //       style={({pressed}) => (pressed ? styles.buttonPressed : null)}
  //       onPress={() => handleDrugClick(drug.drugId)}
  //     >
  //       <View style={styles.innerContainer}>
  //         <Text style={styles.text}>
  //           {drugName} {styrka}
  //         </Text>
  //       </View>
  //     </Pressable>
  //   </View>
  // </>
  return (
    <View>
      {DRUGS.map((drug) => (
        <TouchableOpacity
          key={drug.drugId}
          onPress={() => handleDrugClick(drug.drugId)}
          style={styles.button}
        >
          <Text>{drug.drugName}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  // );
};

export default DrugItem;

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
