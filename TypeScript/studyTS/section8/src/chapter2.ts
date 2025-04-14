interface Person {
  name: string;
  age: number;
}

function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

const person: Person = {
  name: "John",
  age: 30,
};

getPropertyKey(person, "name"); // "John"
