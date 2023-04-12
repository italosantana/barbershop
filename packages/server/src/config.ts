import dotenvSafe from "dotenv-safe";
import path from "path";

const cwd = process.cwd();

const root = path.join.bind(cwd);

dotenvSafe.config({
    path: root(".env"),
    sample: root(".env.example"),
});

export const config = {
    PORT: process.env.PORT || 7500,
    NODE_ENV: process.env.NODE_ENV,
    MONGO_URI: process.env.MONGO_URI || "mongodb://localhost/barbershop",
    JWT_SECRET: process.env.JWT_SECRET
};