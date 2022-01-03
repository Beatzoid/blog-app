import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please add your name"],
            trim: true,
            maxLength: [20, "You're name can't be more than 20 characters"]
        },
        account: {
            type: String,
            required: [true, "Please add your email or phone"],
            trim: true,
            unique: true
        },
        password: {
            type: String,
            required: [true, "Please add your password"],
            trim: true
        },
        avatar: {
            default: "",
            type: String
        },
        role: {
            type: String,
            default: "user" //admin
        },
        type: {
            type: String,
            default: "normal"
        }
    },
    { timestamps: true }
);

export default mongoose.model("User", userSchema);
