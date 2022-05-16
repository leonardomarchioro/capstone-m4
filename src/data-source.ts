import { DataSource } from "typeorm";
require("dotenv").config();

export const AppDataSource =
  process.env.DATABASE_URL 
    ? new DataSource({
      url: process.env.DATABASE_URL as string,
      type: "postgres"
  }) :
  process.env.NODE_ENV === "test"
    ? new DataSource({
        type: "sqlite",
        database: ":memory:",
        entities: ["src/entities/**/*.ts"],
        synchronize: true,
      })
    : new DataSource({
        type: "postgres",
        host: "localhost",
        port: 5432,

        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,

        synchronize: true,
        logging: true,
        entities: ["src/entities/**/*.ts"],
        migrations: ["src/migrations/*.ts"],
      });

export async function conectDatabase(){
  return await AppDataSource.initialize()
    .then(() => {
      console.log("DataSource initialized");
    })
    .catch((err) => {
      console.error("Error DataSource", err);
    });
}