import "reflect-metadata";
import { DataSource } from "typeorm";
import { Events } from "../entities/Events";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "events.db",
    entities: [Events],
    migrations: ["src/migrations/*.ts"],
    synchronize: true,
});
