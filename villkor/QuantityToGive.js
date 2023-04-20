import {StyleSheet, Text, View} from "react-native";
import React from "react";

const QuantityToGive = (seledtedDrugs) => {
  const w = 44;
  const strength = seledtedDrugs.styrka.charAt(seledtedDrugs.styrka.length - 5);
  const numStrength = parseFloat(seledtedDrugs.styrka);

  const c1 = strength === "m";
  const c2 = seledtedDrugs.dosiMg;
  const c3 = seledtedDrugs.dosiMg_2;
  const c4 = seledtedDrugs.dosIµG;
  const c5 = seledtedDrugs.dosIµG_2;
  const c6 = seledtedDrugs.dosIµG_3;
  const c7 = seledtedDrugs.styrka;

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
