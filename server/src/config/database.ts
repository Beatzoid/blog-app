import mongoose from "mongoose";

const URI = process.env.MONGODB_URL;

mongoose.connect(`${URI}`, (err: any) => {
    if (err) throw err;
    console.log("MongoDB successfully connected");
});
