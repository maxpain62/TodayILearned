//import requires modules
const express = require("express");
const app = express();
const mysql = require("mysql2");

//if you do not add cors here then below erroe will occure
const cors = require("cors");
app.use(cors());
app.use(express.json());

//set connection string
let connection = mysql.createConnection({
  host: "10.0.0.63",
  user: "gaurav",
  password: "ubuntu",
  database: "TodayILearned",
});

//check connection with db
connection.connect((connectionError) => {
  if (connectionError) throw connectionError;
  console.log("connected");
});

//get data from db
app.get("/getData", (req, res) => {
  connection.query(
    "select text, source, category, votesInteresting, votesMindblowing, votesFalse from facts",
    (dataError, result) => {
      if (dataError) {
        console.error(dataError);
        res.status(500).send("db error");
        return;
      }
      res.json(result);
    }
  );
});

//listen on port
app.listen(8000, () => {
  console.log(`Server is up and running on 8000 ...`);
});
