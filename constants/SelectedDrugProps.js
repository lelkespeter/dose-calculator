export const SelectedDrugProps = (selectedDrug) => {
  return {
    drugId: selectedDrug.drugId,
    catId: selectedDrug.catId,
    drugName: selectedDrug.drugName,
    styrka: selectedDrug.styrka,
    recept: selectedDrug.recept,
    dosIµG: selectedDrug.dosIµG,
    obs: selectedDrug.obs,
    dosiMg: selectedDrug.dosiMg,
    dosIµG_2: selectedDrug.dosIµG_2,
    obs_2: selectedDrug.obs_2,
    dosiMg_2: selectedDrug.dosiMg_2,
    dosIµG_3: selectedDrug.dosIµG_3,
  };
};
