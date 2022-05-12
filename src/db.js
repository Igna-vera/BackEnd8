import { config } from "./config.js"; //MySql
import _knex from "knex";
export const knex = _knex(config);
