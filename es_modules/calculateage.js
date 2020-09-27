exports.calculateAge = function (stringBirthdate) {

  //The date of today in the format YYYY-MM-DDT00:00:00.000Z
  const today = new Date();
  //new Date(stringBirthdate) will give us the birthday of the driver in YYYY-MM-DDT00:00:00.000Z format
  const birthDate = new Date(stringBirthdate);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  };
	
  return age;
};
