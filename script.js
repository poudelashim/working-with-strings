const airline = "Royal Ashim Airlines";
const plane = "A320";

//string methods
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//fix the capitalization
const passenger = "aShMA"; //Ashma
const passengerLower = passenger.toLowerCase();
const correctPassenger =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(correctPassenger);

//comparing email
const email = "hello@ashim.com";
const loginEmail = "  Hello@Ashim.Com \n";

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(email);
// console.log(loginEmail);
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

//Replacing
const priceGB = "300,85£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS);

const announcement =
  "All passengers come to boarding door 24. Boarding door 24!";
console.log(announcement.replaceAll("door", "gate"));

//Booleans
const planes = "Airbus A320neo";
console.log(planes.includes("A320"));
console.log(planes.includes("Boeing"));
console.log(planes.startsWith("Air"));
if (planes.startsWith("Airbus") && planes.endsWith("neo"));
console.log("part of the new airbus family");

// Practise Exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (
    baggage.includes("knife") ||
    baggage.includes("guns") ||
    baggage.includes("bombs")
  ) {
    console.log("you are not allowed to board");
  } else {
    console.log("Welcome on board");
  }
};
checkBaggage("I have a laptop, food,pocket knife");
checkBaggage("I have a shocks, camera");
checkBaggage("I have a gun, bombs for protection");

/*Working with Strings Part1*/
// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log("B737"[0]);

// console.log(airline.length);
// console.log("B737".length);

//index of

// console.log(airline.indexOf("r"));
// console.log(airline.lastIndexOf("r"));
// console.log(airline.indexOf("Ashim"));

// console.log(airline.slice(5));
// console.log(airline.slice(5, 11));

//extract without knowing indexOf

// console.log(airline.slice(0, airline.indexOf(" ")));
// console.log(airline.slice(airline.lastIndexOf(" ") + 1));

// console.log(airline.slice(-5));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   //B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === "B" || s === "E") console.log("You got the middle seat");
//   else console.log("You got lucky!");
// };
// checkMiddleSeat("11B");
// checkMiddleSeat("23C");
// checkMiddleSeat("3E");
