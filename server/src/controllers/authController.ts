import { Request, Response } from "express";
import bcrypt from "bcrypt";

import Users from "../models/userModel";

import { handleError } from "../utils/handleError";
import { generateActivateToken } from "../utils/generateToken";

const authController = {
    register: async (req: Request, res: Response) => {
        try {
            const { name, account, password } = req.body;

            const user = await Users.findOne({ account });
            if (user)
                return res
                    .status(400)
                    .json({ msg: "Email or phone number already exists" });

            const passwordHash = await bcrypt.hash(password, 12);

            const newUser = {
                name,
                account,
                password: passwordHash
            };

            const activateToken = generateActivateToken(newUser);

            return res.json({
                status: "OK",
                msg: "Registered successfully",
                data: newUser,
                activateToken
            });
        } catch (err) {
            return handleError(err, res);
        }
    }
};

export default authController;
