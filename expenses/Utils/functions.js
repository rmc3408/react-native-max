export function getDateFormatted(value) {
  return `${value.toDateString()}`
}

export function getDateMinusDays(todaysDate, days) {
  const diff = new Date(todaysDate.getFullYear(), todaysDate.getMonth(), todaysDate.getDate() - days)
  return diff
}

export function filteringDate(item, days) {
  const today = new Date();
  const dateDaysAgo = getDateMinusDays(today, days);
  return item.createdAt > dateDaysAgo;
}