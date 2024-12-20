import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

export const validate = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if(errors.isEmpty()){
        return next();
    }

    const extractErrors: object[] = [];

    errors.array().map((err: any) => extractErrors.push({[err.param]: err.msg}));

    return res.status(402).json({
        errors: extractErrors
    });
}