const calculateAge = function(date, month, year) {
  const today = new Date();
  const todayDate = today.getDate();
  const todayMonth = today.getMonth() + 1;
  const todayYear = today.getFullYear();
  const todayInMiliSeconds = today.setFullYear(
    todayYear,
    todayMonth,
    todayDate
  );
  const birthDateInMiliSeconds = today.setFullYear(+year, +month, +date);
  const diff = todayInMiliSeconds - birthDateInMiliSeconds;
  const age = new Date(diff);
  const yearOld = age.getFullYear() - 1970;
  const monthOld = age.getMonth();
  const day = age.getDate() - 1;
  const timeInEarth = [yearOld, monthOld, day];
  return timeInEarth;
};

exports.calculateAge = calculateAge;
