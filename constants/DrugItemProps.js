export const getDrugItemProps = (item) => {
  return {
    drugId: item.drugId,
    catId: item.catId,
    drugName: item.drugName,
    styrka: item.styrka,
    recept: item.recept,
    dosIµG: item.dosIµG,
    obs: item.obs,
    dosiMg: item.dosiMg,
    dosIµG_2: item.dosIµG_2,
    obs_2: item.obs_2,
    dosiMg_2: item.dosiMg_2,
    dosIµG_3: item.dosIµG_3,
  };
};
