export const gigasecond = (startDate) => {
  const GIGASECOND_IN_MS = 1e9 * 1000;

  const resultDate = new Date(startDate.getTime());

  resultDate.setTime(resultDate.getTime() + GIGASECOND_IN_MS);

  return resultDate;
};
