export const simulateLoading = (second: number = 3) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, second * 1000);
  });
};
