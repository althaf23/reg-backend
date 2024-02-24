const { client } = require("./connectDB.js");

const connecttoDb = async () => {
  try {
    await client.connect();
    console.log("Connection established");
  } catch (err) {
    console.log("Connecting to Database", err);
  }
};
connecttoDb();

const getAll = async (req, res) => {
  await client.query("select * from books", (err, ress) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log(ress.rows);
      const data = ress.rows;
      res.status(200).json({ data });
    }
    console.log("GetAll executed");
  });
};


const postone = async (req, res) => {
  const { name,dob,email,gender,phone,eid,address,nas,state,district,block,ward} = req.body;
  await client.query(`insert into employee values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)`, [
    name,
    dob,
    email,
    gender,
    phone,
    eid,
    address,
    nas,
    state,
    district,
    block,
    ward,
  ]);
  console.log("PostOne is executed");
  res.json({ msg: "Success" });
};


module.exports = {
  getAll,
  postone,
};
