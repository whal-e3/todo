const dateFormat = date => {
  const dateFormat = new Date(date);
  let month = dateFormat.getMonth() + 1;
  if (month < 10) {
    month = '0' + month;
  }
  let dates = dateFormat.getDate();
  if (dates < 10) {
    dates = '0' + dates;
  }
  const year = dateFormat.getFullYear();
  const dateString = year + '-' + month + '-' + dates;

  return dateString;
};

export default dateFormat;
