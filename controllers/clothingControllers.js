/* //Unique id
import { v4 as uuidv4 } from "uuid";
*/

const { v4: uuidv4 } = require("uuid");

const clothes = [
  /* { type: "shirt", color: "red", size: "M", id: 1},
  { type: "jeans", color: "blue", size: "L" },
  { type: "socks", color: "white", size: "S" }, */ 
];

//          Get clothes
// ROUTE    GET /api/cloth
const getClothes = (req, res) => {

  if (!clothes.length) {
    return res.status(400).json ({
      status: "error",
      msg: "Clothing library is empty"
    })
  }

  res.status(200).json({
    status: "success",
    message: "Printing clothing library",
    data: clothes,
  });
};

//          Get clothes
// ROUTE    GET /api/clothes/:id
const getClothesById = (req, res) => {

  const { id } = req.params;
  const foundclothes = clothes.find((clothes) => clothes.id === id);
  
  if(!foundclothes)
  return res.status(400).json ({
   status: "error",
   msg: "Clothing ID not found"
  });

  res.status(200).json({
    status: "success",
    message: "Clothing ID found",
    data: foundclothes,
  })
}

//          POST clothes
// ROUTE    POST /api/clothes/:id
const postClothing = (req, res) => {
  
  const cloth = req.body;
  clothes.push({ ...cloth, id: uuidv4() });

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
    type,
    color,
    size,
    id: clothingId,
  };

  const clothingIndex = clothes.findIndex((u) => u.id == clothingId);
  clothes[clothingIndex] = newClothing;
  
  res.status(200).json({
    status: "success",
    msg: "Clothing updated",
  });
};

//          Delete
// ROUTE    Delete /api/clothes/:id

const removeClothing = (req, res) => {
  const clothingId = req.params.id;

  const clothingIndex = clothes.findIndex((u) => u.id == clothingId);
  clothes.splice(clothingIndex, 1);

  res.status(200).json({
    status: "success",
    message: "Deleted Clothing",
  });
};


module.exports = {
  getClothes,
  getClothesById,
  postClothing,
  updateClothing,
  removeClothing,
};
