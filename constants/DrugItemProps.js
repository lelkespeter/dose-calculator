export const getDrugItemProps = (item) => {
  return {
    id: item.drugId,
    drugName: item.drugName,
    strength: item.strength,
    // and so on...
  };
};
