import { Request, Response } from "express";
import argon2 from "argon2";

import Users from "../models/userModel";

import handleError from "../utils/handleError";

import { generateActiveToken } from "../config/generateToken";

const authController = {
    register: async (req: Request, res: Response) => {
        try {
            const { name, email, password, account } = req.body;

            const user = await Users.findOne({ email });
            if (user)
                return res
                    .status(400)
                    .json({ err: "Email or phone number already in use" });

            const passwordHash = await argon2.hash(password, {
                hashLength: 512
            });

            const newUser = {
                name,
                email,
                password: passwordHash,
                account
            };

            const activeToken = generateActiveToken({ newUser });
            // await newUser.save();

            return res.json({
                status: "OK",
                msg: "Successfully registered",
                data: newUser,
                activeToken
            });
        } catch (err) {
            handleError(err, res);
        }

        return;
    }
};

export default authController;
