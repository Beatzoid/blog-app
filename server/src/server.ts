import "dotenv-safe/config";

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";

import logger from "./utils/logger";

import "./config/database";

const app = express();
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());

// Routes
app.get("/", (_req, res) => {
    return res.json({ msg: "Hello world!" });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    logger.info(`Server listening on port ${PORT}`);
});
