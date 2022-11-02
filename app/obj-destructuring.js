function Person({ name, age, city }) {
  return `
  <h1>${name}</h1>
  <p>${age}</p>
  <p>${city}</p>
  `;
}

Person({ name: "Mark", age: 33, city: "St. Louis" });
