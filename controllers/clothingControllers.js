/* //Unique id
import { v4 as uuidv4 } from "uuid";
*/

const clothes = [
  { type: "shirt", color: "red", size: "M" },
  { type: "jeans", color: "blue", size: "L" },
  { type: "socks", color: "white", size: "S" },
];

//          Get clothes
// ROUTE    GET /api/cloth
const getClothes = (req, res) => {
  res.status(200).jason({
    data: clothes,
    sucess: true,
    message: "user found"
  }) 
}

//          Get clothes
// ROUTE    GET /api/clothes/:id
const getClothesById = (req, res) => {
  res.status(200).jason({
    sucess: true,
    message: "GetUser updated sucssesfully"
  })
}


//          POST clothes
// ROUTE    POST /api/clothes/:id
const postClothing = (req, res) => {
  const user = req.body;
  user.push({  ...user, id: uuidv4()})
  res.send({
    sucess: true,
    message:"New user added succesfully",
  })
  
}
//          PUT clothes
// ROUTE    PUT /api/clothes/:id
const updateClothing = (req, res) => {
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

//          Delete
// ROUTE    Delete /api/clothes/:id

const removeClothing = (req,res) => {
  message: "Hej :)"
}


module.exports = {
  getClothes,
getClothesById,
postClothing,
updateClothing,
removeClothing
}