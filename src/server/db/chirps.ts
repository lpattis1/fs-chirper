import { Query } from "./index";

export interface TUsers {
  id?: number;
  username?: string;
  password?: string;
  created_at: Date;
}
export interface TChirps {
  id?: number;
  userid?: number;
  content?: string;
  created_at: Date;
}

const allChirps = () =>
  Query<Array<TChirps | TUsers>>(
    "select chirps.*, users.name from chirps join users on users.id = chirps.userid order by chirps.id desc"
  );

const singleChirps = (id: number) =>
  Query<Array<TChirps | TUsers>>(
    "select chirps.*, users.name from chirps join users on users.id = chirps.userid where chirps.id = ?",
    [id]
  );

const postChirps = (content: string, userid?: number) =>
  Query<{ insertId: number }>(
    "insert into chirps (userid, content) value (?)",
    [userid, content]
  );

const putChirps = (id: number, content: string) =>
  Query("update chirps set content = ? where id = ?", [content, id]);

const deleteChirps = (id: number) =>
  Query("delete from chirps where id = ?", [id]);

export default {
  allChirps,
  singleChirps,
  postChirps,
  putChirps,
  deleteChirps,
};
