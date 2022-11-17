// si avg tarda 1s
export const avg = function (array) {
  return array.reduce((prev, curr) => prev + curr, 0) / array.length;
};

export const stdDev = function (array) {
  const mean = avg(array); // 1s
  // const diffArr = array.map(el => (el - avg(array))*(el - avg(array))) // malísima implementación porque se nos dispara el tiempo de cálculo
  const diffArr = array.map((el) => (el - mean) * (el - mean)); // 1s
  return Math.sqrt(avg(diffArr)); // 1s
};
