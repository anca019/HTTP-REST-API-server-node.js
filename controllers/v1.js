exports.getQuote = (req, res, next) => {

//The API will send the below response when a GET request is made
  res.status(200).json({
    success: true,
    message: "quote successfully computed",
    data: {
      eligible: false,
      premiums: ""
    }
  }) 
};

exports.postQuote = (req, res, next) => {

  const carValue = req.body.car_value;
  const driverBirthdate = req.body.driver_birthdate;

  const civilLiability = require('../es_modules/calculatecivilliability');
  const age = require('../es_modules/calculateage');

  //If data is missing 400: Bad Request will be rendered
  if (!carValue || !driverBirthdate) {
    res.status(400).json({
    success: false,
    message: "parameters missing or incorrect values"
    }) 
  };

  //If the data is incorrect 400: Bad Request will be rendered
  if (typeof(carValue) !== "number" || typeof(driverBirthdate) !== "string") {
    res.status(400).json({
    success: false,
    message: "parameters missing or incorrect values"
    }) 
  };

  /*
  The driver's birthday is converted from 'DD/MM/YYYY' to 'YYYY/MM/DD' below.
  We need the 'YYYY/MM/DD' format so that we can convert it to YYYY-MM-DDT00:00:00.000Z 
  in the function calculateAge(stringBirthdate)
  */
  let driverDobString = driverBirthdate;
  const arrayBirthdate = driverDobString.split("/");

  driverDobString = arrayBirthdate[2] + '-' + arrayBirthdate[1] + '-' + arrayBirthdate[0];

  const driverAge = age.calculateAge(driverDobString);

  const civil_liab = civilLiability.calculateCivilLiability(driverAge);


  //The API will send the below response if the driver is NOT eligible for the insurance
  if (driverAge < 18) {
    res.status(200).json({
      success: true,
      message: "quote successfully computed",
      data: {
        eligible: false,
        premiums: null
      }
    })  
  };

  //The API will send the below response if the driver is eligible for the insurance
  res.status(200).json({
    success: true,
    message: "quote successfully computed",
    data: {
      eligible: true,
      premiums: {
        civil_liability: parseFloat(Number(civil_liab).toFixed(2)),
        omnium: parseFloat((Number(carValue * 0.03).toFixed(2)))
      }
    }     
  });
}
