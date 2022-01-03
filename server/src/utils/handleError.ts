import { Response } from "express";

export function handleError(err: any, res: Response) {
    return res.status(500).json({ error: err.message });
}
