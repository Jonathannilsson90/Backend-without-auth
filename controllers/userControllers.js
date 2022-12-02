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


