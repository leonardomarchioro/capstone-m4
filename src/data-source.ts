import { DataSource } from "typeorm";
require("dotenv").config();

const entities =
  process.env.NODE_ENV === "production"
    ? ["dist/src/entities/**/**.entity*{.js,.ts}"]
    : ["src/entities/**/**.entity*{.js,.ts}"];

const migrations =
  process.env.NODE_ENV === "production"
    ? ["dist/src/migrations/*{.js,.ts}"]
    : ["src/migrations/*{.js,.ts}"];

export const AppDataSource = process.env.DATABASE_URL
  ? new DataSource({
      url: process.env.DATABASE_URL as string,
      type: "postgres",
      synchronize: false,
      ssl: {
        rejectUnauthorized: false,
      },

      migrations,
      entities,
    })
  : process.env.NODE_ENV === "test"
  ? new DataSource({
      type: "sqlite",
      database: ":memory:",
      synchronize: true,

      entities,
      migrations,
    })
  : new DataSource({
      type: "postgres",
      host: "localhost",
      port: 5433,

      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,

      synchronize: true,
      logging: true,
      entities,
      migrations,
    });

export async function conectDatabase() {
  return await AppDataSource.initialize().then(() => {
    console.log("DataSource initialized");
  });
}
