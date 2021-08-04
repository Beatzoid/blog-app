import { NextFunction, Request, Response } from "express";

export const validRegister = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { name, password, account } = req.body;

    if (!name) return res.status(400).json({ err: "Please add your name" });
    if (name.length > 20)
        return res.status(400).json({ err: "Please add your name" });

    if (!account)
        return res
            .status(400)
            .json({ err: "Please add your email or phone number" });

    if (!validPhoneNumber(account) && !validEmail(account))
        return res
            .status(400)
            .json({ err: "Email or phone number is invalid" });

    if (password.length < 6)
        return res
            .status(400)
            .json({ err: "Password must be at least 6 characters long" });

    next();
    return;
};

export const validPhoneNumber = (phoneNumber: string) => {
    const re = /^[+]/g;
    return re.test(phoneNumber);
};

export const validEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email.toLowerCase());
};
