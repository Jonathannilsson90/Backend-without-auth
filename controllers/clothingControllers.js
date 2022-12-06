/* //Unique id
import { v4 as uuidv4 } from "uuid";
*/

const { v4: uuidv4 } = require("uuid");

const clothes = [
  /*  { type: "shirt", color: "red", size: "M" },
  { type: "jeans", color: "blue", size: "L" },
  { type: "socks", color: "white", size: "S" }, */
];

//          Get clothes
// ROUTE    GET /api/cloth
const getClothes = (req, res) => {

  res.status(200).json({
    data: clothes,
    status: "success",
    message: "Printing clothing library",
  });
};

//          Get clothes
// ROUTE    GET /api/clothes/:id
const getClothesById = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Found clothing",
  });
};

//          POST clothes
// ROUTE    POST /api/clothes/:id
const postClothing = (req, res) => {
  
  const cloth = req.body;
  clothes.push({ ...cloth, id: uuidv4() });
  

/*
  if(null) {
    return res.status(400).json({
      status: "failed",
      msg: "Need to add "
    })
  }
*/

  res.send({
    status: "success",
    message: "New clothing added",
  });
};

//          PUT clothes
// ROUTE    PUT /api/clothes/:id

const updateClothing = (req, res) => {
  const clothingId = req.params.id;
  const { type, color, size } = req.body;

  const newClothing = {
    id: clothingId,
    type,
    color,
    size,
  };

  const clothingIndex = clothes.findIndex((u) => u.id == clothingId);
  clothes[clothingIndex] = newClothing;

  req.status(200).json({
    status: "success",
    msg: "Clothing updated",
  });
};

//          Delete
// ROUTE    Delete /api/clothes/:id

const removeClothing = (req, res) => {
  const { clothingId } = req.params.id;

  const clothingIndex = clothes.findIndex((u) => u.id == clothingId);
  clothes.splice(clothingIndex, 1);

  res.status(200).json({
    status: "success",
    msg: "Deleted Clothing",
  });
};

module.exports = {
  getClothes,
  getClothesById,
  postClothing,
  updateClothing,
  removeClothing,
};
