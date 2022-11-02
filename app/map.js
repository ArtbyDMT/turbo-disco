const users = [
  {
    id: 1,
    name: "Mark",
    age: 33,
    city: "St. Louis",
  },
  {
    id: 2,
    name: "Mike",
    age: 44,
    city: "St. Louis",
  },
  {
    id: 3,
    name: "John",
    age: 55,
    city: "St. Louis",
  },
];

function List({ items }) {
  return `
    <ul>
      ${items.map(
        (item) => `
        <li>${item.name}</li>
      `
      )}
    </ul>
  `;
}

const markup = List({ items: users });
console.log(markup);

const nums = [1, 2, 3, 4, 5];

const doubledNums = nums.map((num) => num * 2);

console.log(nums, doubledNums);

const badMarkup = users.map((name) => `<li>${name}</li>`);

console.log(badMarkup);
