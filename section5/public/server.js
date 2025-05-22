// // server.js
// const express = require("express");
// const mysql = require("mysql2/promise");
// const path = require("path");

// const app = express();
// const PORT = 3000;

// // Serve static files from "public" folder (HTML, JS, CSS, etc.)
// app.use(express.static(path.join(__dirname, "public")));

// async function startServer() {
//   try {
//     const connection = await mysql.createConnection({
//       host: "10.0.0.63",
//       user: "gaurav",
//       password: "ubuntu",
//       database: "TodayILearned",
//     });

//     console.log("Connected to MySQL");

//     // API route to fetch facts
//     app.get("/facts", async (req, res) => {
//       try {
//         const [rows] = await connection.execute(
//           "SELECT text, source, category FROM facts"
//         );
//         res.json(rows);
//       } catch (err) {
//         console.error("Query error:", err);
//         res.status(500).send("Database query failed");
//       }
//     });

//     // Start the server
//     app.listen(PORT, () => {
//       console.log(`Server is running at http://localhost:${PORT}`);
//     });
//   } catch (err) {
//     console.error("MySQL connection failed:", err);
//   }
// }

// startServer();

//chatGPT new code
const express = require("express");
const mysql = require("mysql2/promise");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, "public")));

async function startServer() {
  try {
    const connection = await mysql.createConnection({
      host: "10.0.0.63",
      user: "gaurav",
      password: "ubuntu",
      database: "TodayILearned",
    });

    console.log("Connected to MySQL");

    // Register /facts route here
    app.get("/facts", async (req, res) => {
      console.log("GET /facts called"); // Debug line to confirm this route hits
      try {
        const [rows] = await connection.execute(
          "SELECT text, source, category FROM facts"
        );
        res.json(rows);
      } catch (err) {
        console.error("Query error:", err);
        res.status(500).send("Database query failed");
      }
    });

    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("MySQL connection failed:", err);
  }
}

startServer();
