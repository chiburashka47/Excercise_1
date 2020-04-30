const employers2 = [
  "Alex",
  "",
  "ludmila",
  "Viktor",
  "",
  "oleg",
  "iNna",
  "Ivan",
  "Alex",
  "Olga",
  " Ann",
];

const employersNames2 = employers
  .filter((elem) => elem)
  .map((item) => item.toLowerCase().trim());

const sponsors2 = {
  cash2: [40000, 5000, 30400, 12000],
  eu2: ["SRL", "PLO", "J&K"],
  rus2: ["RusAuto", "SBO"],
};

const { cash2, eu2, rus2 } = sponsors2;

const sumSponsors2 = [...eu2, ...rus2, "unexpected sponsor"];

const calcCash2 = (cash = 0) => cash.reduce((a, b) => a + b);

const money2 = calcCash2(cash2);

const makeBusiness2 = (owner, cash, emp, director = "Victor") => {
  console.log(
    `We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}`
  );
  console.log("And we have a sponsors: ");
  console.log([] + sumSponsors2);
  console.log(`Note. Be careful with ${eu2[0]}. It's a huge risk.`);
};
makeBusiness2("Sam", money, employersNames);
