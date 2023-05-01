import {StyleSheet, Text, View} from "react-native";
import React, {useContext} from "react";
import {AppContext} from "../context/AppContext";

const QuantityToGive = (selectedDrugs) => {
  const {bodyWeight} = useContext(AppContext);
  const w = +bodyWeight;
  const strength = selectedDrugs.styrka.charAt(selectedDrugs.styrka.length - 5);
  const numStrength = parseFloat(selectedDrugs.styrka);

  const c1 = strength === "m";
  const c2 = selectedDrugs.dosiMg;
  const c3 = selectedDrugs.dosiMg_2;
  const c4 = selectedDrugs.dosIµG;
  const c5 = selectedDrugs.dosIµG_2;
  const c6 = selectedDrugs.dosIµG_3;
  const c7 = selectedDrugs.styrka;

  let dos;

  if (c1 && c4) {
    dos = `dos:  ${(c4 * w).toFixed(0)} ${c4 ? "µg" : null}`;
  } else if (c1 && c2) {
    dos = `dos:  ${(c2 * w).toFixed(0)} ${c2 ? "mg" : null}`;
  } else {
    dos = `dos: ${(c4 * w).toFixed(0)} ${c4 ? "µg" : null}`;
  }

  return dos;
};

export default QuantityToGive;

const styles = StyleSheet.create({});
