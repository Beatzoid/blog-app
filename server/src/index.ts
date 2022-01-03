import dotenv from "dotenv";
dotenv.config({ path: __dirname + "/config/.env" });

// Database
import "./config/database";

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";

// Routes
import routes from "./routes";

// Middleware
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());

// Routes
app.get("/", (_req, res) => {
    res.json({ msg: "Hello World!" });
});

app.use(routes.authController);

// Main server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
