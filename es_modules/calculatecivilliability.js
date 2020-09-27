exports.calculateCivilLiability = function (age) {

  let civilLiability = 0;

  if (age <= 25) {
	civilLiability = 1000.00;
  } else {
	civilLiability = 500.00;
  };

  return civilLiability;
};
