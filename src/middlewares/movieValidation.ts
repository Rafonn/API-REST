import { body } from "express-validator";

export const movieCreateValidation = () =>{
    return [
        body("title").isString().withMessage("Titulo obrigatorio")
    ]
}