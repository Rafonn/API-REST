import {Router, Request, Response} from "express"
import { createMovie, findMovieById, getAllMovies, removeMovie, updateMovie } from "./controllers/MovieController";
import { validate } from "./middlewares/handleValidation";
import { movieCreateValidation } from "./middlewares/movieValidation";

const router = Router();

export default router.get('/teste', (req: Request, res: Response) => {
    res.status(200).send('Foi');
})
.post("/movie", movieCreateValidation(), validate,  createMovie)
.get("/movie/:id", findMovieById)
.get("/movie", getAllMovies)
.delete("/movie/:id", removeMovie)
.patch("/movie/:id", updateMovie);