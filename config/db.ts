import mongoose from "mongoose";
import config from "config";
import Logger from "./logger";

async function db() {
    const dbUri = config.get<string>("dbUri");

    try{
        await mongoose.connect(dbUri);
        Logger.info('Conectou ao db');
    }catch(e){
        Logger.error('Não foi possivel conectar');
        Logger.error(e);
        process.exit(1);
    }
}

export default db;