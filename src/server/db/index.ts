import * as mysql from "mysql";
import config from "../config/index";

const pool = mysql.createPool(config.mysql);

export const Query = <T = any>(query: string, values?: any) => {
  const sql = mysql.format(query, values);

  return new Promise<T>((resolve, reject) => {
    pool.query(sql, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

import Chirps from "./chirps";
import Users from "./users";
export default {
  Chirps,
  Users,
};
