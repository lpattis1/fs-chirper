import { Query } from "./index";
import { TUsers } from "./chirps";

const allUsers = () => Query<Array<TUsers>>("select id, name from users");
const singleUser = (userid: number) =>
  Query<Array<TUsers>>("select id, name from users where id = ?", [userid]);

const postUser = (name: string) =>
  Query<Array<TUsers>>("insert into users(name) value (?)", [name]);

export default {
  allUsers,
  singleUser,
  postUser,
};
