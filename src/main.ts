import "./style.css";

// function add(num1: number, num2: number, str: string, bool: boolean) {
//   const testArray: string[] = [str, bool.toString()];
//   const typeJoin: string = testArray.join(" ");
//   return [typeJoin, num1 + num2];
// }
// console.log(add(3, 8, "good", true));
// function array(num: number, str: string) {
//   let mixed: (number | string)[] = [num, str];
//   return mixed;
// }

// console.log(array(8, "good"));

// let users: {
//   name: string;
//   age: number;
// }[] = [
//   { name: "Tom", age: 30 },
//   { name: "Jack", age: 25 },
//   { name: "Alice", age: 32 },
// ];
// console.log(users);

// type User = {
//   name: string;
//   age: number;
// };

// let myUsers: User[] = [
//   { name: "Tania", age: 39 },
//   { name: "Jen", age: 20 },
//   { name: "Melisa", age: 2 },
// ];
// console.log(myUsers);

// enum Role {
//   ADMIN,
//   USER,
// }
// const person = {
//   role: Role.ADMIN,
// };
// if (person.role === Role.ADMIN) {
//   console.log("Role: ", Role.ADMIN);
// }

// enum UserStatus {
//   Active = "ACTIVE",
//   Inactive = "INACTIVE",
//   Banned = "BANNED",
// }

// let status: UserStatus = UserStatus.Active;
// console.log(status);

// const enum HttpCodes {
//   OK = 200,
//   BadRequest = 400,
//   Unauthorized = 401,
// }

// const httpStatus = HttpCodes.OK;
// console.log(httpStatus);

// function logMessage(message: string): void {
//   console.log(message);
// }

// logMessage("Hello, world!");

// let myFunc: (firstArg: string, secondArg: number) => void;

// myFunc = (first: string, second: number) => {
//   console.log(`First: ${first}, Second: ${second}`);
// };

// myFunc("Hello", 42); // Висновок: "First: Hello, Second: 42"

// type CallbackType = (...nums: number[]) => number;

// function calc(param1: number, param2: number, callback: CallbackType): void {
//   console.log("Result:", callback(param1, param2));
// }

// calc(1, 1, (num1, num2) => num1 + num2);
// calc(10, 5, (num1, num2) => num1 - num2);

// const promise: Promise<string> = new Promise((resolve) => {
//   setInterval(() => {
//     resolve("Done!");
//   }, 1000);
// });

// promise.then((data) => {
//   console.log(data);
// });

type Person = {
  name: string;
};

type AdditionFields = {
  age: number;
};

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const merged = merge<Person, AdditionFields>({ name: "Alisa" }, { age: 28 });

console.log(merged.name); // 'Alisa'

console.log(merged.age); // 28

type Length = {
  length: number;
};

function getLength<T extends Length>(str: T) {
  return str.length;
}

getLength("text");
getLength([1, 2, 3]);

type User = {
  id: number;
  name: string;
  email: string;
  registered: boolean;
};

function createUser(data: Partial<User>): User {
  // Деякі значення за замовчуванням:
  const defaultUser: User = {
    id: Date.now(),
    name: "",
    email: "",
    registered: false,
  };

  // З'єднуємо дані користувача та значення за замовчуванням
  return { ...defaultUser, ...data };
}

const newUser = createUser({ name: "Alice", email: "alice@example.com" });

console.log(newUser);

type Callback = (...args: unknown[]) => unknown;

function createLoggedFunction<T extends Callback>(func: T) {
  let funcRef = func;

  const loggedFunction = (...args: Parameters<T>) => {
    console.log(`Function ${func.name} was called with arguments:`, args);
    const result = funcRef(...args) as ReturnType<T>;
    return result;
  };

  return loggedFunction;
}
