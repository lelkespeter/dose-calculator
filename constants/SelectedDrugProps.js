export const SelectedDrugProps = (selectedDrugs) => {
  if (!selectedDrugs) {
    return null;
  }

  return {
    drugId: selectedDrugs.drugId,
    catId: selectedDrugs.catId,
    drugName: selectedDrugs.drugName,
    styrka: selectedDrugs.styrka,
    recept: selectedDrugs.recept,
    dosIµG: selectedDrugs.dosIµG,
    obs: selectedDrugs.obs,
    dosiMg: selectedDrugs.dosiMg,
    dosIµG_2: selectedDrugs.dosIµG_2,
    obs_2: selectedDrugs.obs_2,
    dosiMg_2: selectedDrugs.dosiMg_2,
    dosIµG_3: selectedDrugs.dosIµG_3,
  };
};
