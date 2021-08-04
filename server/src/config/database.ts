import mongoose from "mongoose";

import logger from "../utils/logger";

const URI = process.env.MONGODB_URI;

mongoose.connect(
    `${URI}`,
    {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (err) => {
        if (err) throw err;

        logger.info("MongoDB successfully connected!");
    }
);
