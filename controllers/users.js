const users = [
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

exports.getUser = (req, res) => { 
  const id = req.params.id * 1;
  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(400).json({
      status: "error",
      msg: "invaid ID",
    });
  }

  res.status(200).json({
    result: users.length,
    status: "success",
    data: users,
  });
};

exports.getById = (req, res) => {
  res.status(200).json({
    status: "success",
    msg: "Du kom fram till user by ID",
  });
};

exports.createUser = (req, res) => {
  const newId = users[users.length - 1].id + 1;
  const newUser = Object.assign({ id: newId }, req.body);

  users.push(newUser);

  res.status(200).json({
    status: "sucess",
    msg: "Du kom till create User!",
  });
};

exports.updateUser = (req, res) => {
  const usersId = req.params.id;
  const { type, color, size } = req.body;

  const newUser = {
    id: userId,
    type,
    color,
    size,
  };

  const userIndex = users.findIndex((u) => (u.id = userId));
  users[userIndex] = newUser;

  res.status(200).json({
    status: "sucess",
    msg: "Du kom till update User",
  });
};

exports.deleteUser = (req, res) => {
  const userId = req.params.id;

  const userIndex = users.findIndex((u) => u.id == userId);
  users.Splice(userIndex, 1);

  res.status(200).json({
    status: "sucess",
    msg: "Du kom till delete User!",
  });
};

//-----BEHÖVS LÄGGAS TILL-----
//skicka en data response till alla RUD