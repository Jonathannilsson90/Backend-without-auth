//export all the callback functions for the CRUD operations
import { v4 as uuidv4 } from "uuid";

let users = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 27,
  },
];

export const createUser = (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuidv4() });
  res.send(`user with the name ${user.firstName} added to DB!`);
};

export const getUser = (req, res) => {
  res.send(users);
  console.log(users);
};