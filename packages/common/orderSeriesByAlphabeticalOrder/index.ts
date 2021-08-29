import { Series } from "../types/queries/series";

const orderSeriesByAlphabeticalOrder = (series: Series[]) => {
  const orderedSeries = [...series];
  return orderedSeries.sort((a: Series, b: Series) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
};

export default orderSeriesByAlphabeticalOrder;
