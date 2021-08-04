import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please add your name"],
            trim: true,
            maxLength: [20, "The maximum length for a name is 20 characters"]
        },
        account: {
            type: String,
            required: [true, "Please add your email or phone number"],
            trim: true,
            unique: true
        },
        password: {
            type: String,
            required: [true, "Please add your password"],
            trim: true
        },
        avatar: {
            type: String,
            default:
                "https://res.cloudinary.com/beatzoid/image/upload/v1628113111/blog/avatars/default_profile_picture_qxcmti.png"
        },
        role: {
            type: String,
            default: "user"
        },
        type: {
            type: String,
            default: "normal"
        }
    },
    { timestamps: true }
);

export default mongoose.model("users", userSchema);
