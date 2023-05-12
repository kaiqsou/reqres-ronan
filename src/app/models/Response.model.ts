import { User } from "./User.model";

export class Response {
  page : number | undefined;
  perpage : number | undefined;
  total : number | undefined;
  total_pages : number | undefined;
  data!: User[];
}
