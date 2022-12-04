console.log('server, routes & controllers är kopplade')//tester

//Unique id
import { v4 as uuidv4 } from "uuid";


// post API
export const createUser = (req, res) => {
  const user = req.body;
  user.push({  ...user, id: uuidv4()})
  res.send({
    sucess: true,
    message:"New user added succesfully",
  })
  
}

// put API
export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const userToBeUpdated = users.find((user) => user.id === id);
  if (firstName) userToBeUpdated.firstName = firstName;
  if (lastName) userToBeUpdated.lastName = lastName;
  if (age) userToBeUpdated.age = age;
  res.send({
    sucess: true,
    message:"User updated succesfully",
  })
};

export const getById = (req, res) => {
  res.status().jason({
    sucess: true,
    message: "user found"
  }) 
}

