function useState(initState) {
  return [initState, (prev) => !prev];
}

const [isLoggedIn, setIsLoggedIn] = useState(false);

const status = setIsLoggedIn(true);

console.log(status);

function verifyName(name) {
  // If 'name' is truthy (a string of more than 0 characters), return 'name'
  return name || "Anonymous";
}

// An empty string is false-y
// A string with at least 1 character is truth-y
// Any non-zero number is truth-y

console.log(Boolean("Mark"));

const person = {
  name: "Mark",
};

const { name } = person;
