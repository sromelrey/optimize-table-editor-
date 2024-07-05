export const generateDateSpan = (startDate, type) => {
  const start = moment(startDate, type);
  const dates = [];
  if (type === "week") {
    for (let i = 0; i < 7; i++) {
      dates.push(start.clone().add(i, "days").format("YYYY-MM-DD"));
    }
  }
  if (type === "day")
    dates.push(start.clone().add(1, "days").format("YYYY-MM-DD"));

  return dates;
};
