// 템플릿 리터럴 타입

type Color = "red" | "green" | "blue";

type Animal = "dog" | "cat" | "chicken";

type ColorAnimal = `${Color}-${Animal}`;
// "red-dog" | "red-cat" | "red-chicken" |
// "green-dog" | "green-cat" | "green-chicken" |
// "blue-dog" | "blue-cat" | "blue-chicken"
