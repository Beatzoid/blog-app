import { Response } from "express";

const handleError = (err: any, res: Response) => {
    console.error(err);
    return res.status(500).json({ err: err.message });
};

export default handleError;
