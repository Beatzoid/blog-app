import { NextFunction, Request, Response } from "express";

export const validRegister = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { name, account, password } = req.body;

    if (!name) return res.status(400).json({ msg: "Please add your name" });
    else if (name.length > 20)
        return res
            .status(400)
            .json({ msg: "Name cannot be longer than 20 characters" });

    if (!account)
        return res
            .status(400)
            .json({ msg: "Please add your email or phone number" });
    else if (!validPhone(account) && !validEmail(account))
        return res
            .status(400)
            .json({ msg: "Email or phone number is invalid" });

    if (password.length < 6)
        return res
            .status(400)
            .json({ msg: "Password must be at least 6 characters long" });

    next();
    return;
};

function validPhone(phone: string) {
    const re = /^[+]/g;
    return re.test(phone);
}

function validEmail(email: string) {
    const re =
        /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(email);
}
