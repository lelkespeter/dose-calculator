import {useContext} from "react";
import {AppContext} from "../context/AppContext";

const DoseInMl = (selectedDrugs) => {
  const {bodyWeight} = useContext(AppContext);
  const w = +bodyWeight;
  const strength = selectedDrugs?.styrka?.charAt(
    selectedDrugs.styrka.length - 5
  );
  const numStrength = parseFloat(selectedDrugs?.styrka);

  const c1 = strength === "m";
  const c2 = selectedDrugs.dosiMg;
  const c3 = (c2 * w) / numStrength;
  const c4 = selectedDrugs.drugName === "Betapred";
  const c5 = selectedDrugs.drugName === "Ondansetron";
  const c6 = selectedDrugs.drugName === "Phenergan";
  const c7 = selectedDrugs.dosIµG;
  const c8 = selectedDrugs.dosIµG_2;
  const c9 = (c7 * w) / numStrength / 1000;
  const c99 = (c8 * w) / numStrength / 1000;
  const c10 = selectedDrugs.drugName === "Atropin";
  const c11 = (c8 * w) / numStrength;
  const c12 = (c7 * w) / numStrength;

  let lm;

  if (c4 && c3 >= 1) {
    lm = "ge 1 ml iv";
  } else if (c5 && c3 >= 2) {
    lm = "ge 2 ml iv";
  } else if (c6 && c3 >= 0.5) {
    lm = "ge 0.5 ml iv";
  } else if (c1 && c7) {
    lm = `ge ${c9.toFixed(2)} ml iv`;
  } else if (c1 && c2) {
    lm = `ge ${c3.toFixed(2)} ml iv`;
  } else if (c10 && c8) {
    lm = `ge ${c99.toFixed(2)} ml iv`;
  } else if (!c1 && c7) {
    lm = `ge ${c12.toFixed(2)} ml ${c7 === 5 ? "per os" : "iv"}`;
  } else if (c10 && c99 >= 2) {
    lm = "ge 2 ml iv";
  } else if (c10 && c9 >= 1) {
    lm = "ge 1 ml";
  } else {
    lm = `ge ${c9.toFixed(2)} ml iv`;
  }

  return lm;
};

export default DoseInMl;
