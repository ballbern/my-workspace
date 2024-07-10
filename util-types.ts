//! Partial
// Both values in User are required.
type PartialUser = {
  name: string;
  age: number;
};

// pass User to a Partial util type and all values within User are now optional (name:?) and can be changed.
const updateUser: Partial<PartialUser> = { name: "John" };

console.log(updateUser);

//! Required
interface RequiredUser {
  name?: string;
  age?: number;
}

const newUser: Required<RequiredUser> = { name: "John", age: 30 };

console.log(updateUser);
