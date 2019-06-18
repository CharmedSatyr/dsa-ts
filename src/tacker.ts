import { name } from 'faker';

class Student {
  // Must define here and in constructor.
  // Makes `fullName` only accessible from `yes()`.
  public fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    // Using `public` arguments creates
    // `this.firstName = firstName;`, etc., in the js
    this.fullName = `${firstName} ${middleInitial &&
      middleInitial} ${lastName}`;
  }
  public yes(): string {
    return this.fullName;
  }
}

interface IPerson {
  firstName: string;
  lastName: string;
}

const greeter = (person: IPerson) =>
  `hello ${person.firstName} ${person.lastName}!`;

const user = new Student(name.firstName(), name.firstName(), name.lastName());

export default Student;
