let x = 3;

// The value assigned to y is a COPY OF the value of x
// PRIMITIVES are COPIED BY VALUE
const y = x;

x = 2;

console.log(x, y);

const person = {
  name: "Mark",
};

// 'person2' and 'person' are pointing to the same object in memory
const person2 = person;

person2.name = "Mike";

console.log(person, person2);

// '...' is the SPREAD OPERATOR
// It creates an entirely new object with the same properties as the object it is spread into
const person3 = { ...person };

person3.name = "John";

console.log(person, person3);
