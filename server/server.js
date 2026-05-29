const express = require("express");

const cors = require("cors");

const dotenv = require("dotenv");

const connectDB = require(
  "./config/db"
);

const authRoutes = require(
  "./routes/authRoutes"
);

const detectRoutes = require(
  "./routes/detectRoutes"
);

const passwordRoutes = require(
  "./routes/passwordRoutes"
);
const historyRoutes = require(
  "./routes/historyRoutes"
);
const emailRoutes = require(
  "./routes/emailRoutes"
);
const statsRoutes = require(
  "./routes/statsRoutes"
);
dotenv.config();

connectDB();

/* APP */

const app = express();

/* MIDDLEWARE */

app.use(express.json());

app.use(cors());

/* HOME ROUTE */

app.get("/", (req, res) => {

  res.send("Server Working");

});

/* AUTH ROUTES */

app.use(
  "/api/auth",
  authRoutes
);

/* URL DETECTOR ROUTES */
app.use(
  "/api/history",
  historyRoutes
);
app.use(
  "/api/detect",
  detectRoutes
);

/* PASSWORD ROUTES */

app.use(
  "/api/password",
  passwordRoutes
);

/* EMAIL ROUTES */

app.use(
  "/api/email",
  emailRoutes
);
app.use(
  "/api/stats",
  statsRoutes
);
/* PORT */

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(
    `Server running on ${PORT}`
  );

});