require("dotenv").config();
import express from "express"
import config from "config"
import router from "./router";
import db from "../config/db";
import Logger from "../config/logger";
import morganMiddleware from "./middlewares/morganMiddleware";

const app = express();

app.use(express.json());

const port = config.get<number>("port");

app.use(morganMiddleware);

app.use('/api/', router);

app.listen(port, async () => {
    await db();

    Logger.info(`Rodando na porta ${port}`);
})