const request = require("request");
const expect = require("chai").expect;
const baseURL = "http://localhost:8080";
const chai = require("chai");
const chaiHttp = require("chai-http");
const civilLiability = require('../es_modules/calculatecivilliability');
const age = require('../es_modules/calculateage');

chai.should();

chai.use(chaiHttp);

describe("Does a GET request which returns the expected data", () => {
  it("Returns the API data", (done) => {
    request.get({ url: baseURL + '/v1/quote/car-insurance'}, (error, response, body) => {
	  const bodyObj = JSON.parse(body);
	  expect(bodyObj.success).to.equal(true);
	  expect(bodyObj.message).to.equal("quote successfully computed");
	  expect(response.statusCode).to.equal(200);
	  console.log(body);
	  done();
	});
  });
});

describe("Does a POST request with valid payload", () => {
  it("Returns the computed prices", (done) => {
    const data = {
	  car_value: 19653.50,
	  driver_birthdate: "15/10/1983"
	};

	console.log(data);

    chai.request(baseURL)
	  .post("/api/v1/quote/car-insurance")
	  .send(data)
	  .end((err, response) => {
	    response.should.have.status(200);
		response.body.should.be.a('object');
		response.body.data.eligible.should.be.eq(true);
		response.body.data.premiums.civil_liability.should.be.eq(500);
		response.body.data.premiums.omnium.should.be.eq(589.61);
		console.log('The API returns the data with the correct price computation');
		console.log(response.body);
		done();
	});
  });
});


it('Age should be 36', () => {
  const driverAge = age.calculateAge("1983/10/15");
  driverAge.should.be.eq(36);
});

it('Civil liability should be 500', () => {
  const driverAge = age.calculateAge("1983/10/15");
  const civilLiab = civilLiability.calculateCivilLiability(driverAge);
  civilLiab.should.be.eq(500);
});

it('Omnium should be 589.61', () => {	
  const omnium =  parseFloat((Number(19653.50 * 0.03).toFixed(2)));
  omnium.should.be.eq(589.61);
});
