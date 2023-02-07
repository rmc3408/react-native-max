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

export function expenseInputsValidator(type, value) {
  let isValid = false;
  switch (type) {
    case 'amount':
      isValid = !isNaN(value) && (+value > 0);
      break;
    case 'description':
      isValid = value.trim().length > 0;
      break;
    case 'createdAt':
      isValid = new Date(value).toString() !== 'Invalid Date';
      break;
    default:
      isValid = false;
      break;
  }
  return isValid;
}