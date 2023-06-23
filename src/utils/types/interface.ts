/* eslint-disable @typescript-eslint/no-empty-interface */
import { UserData } from "./user";

declare global {
  namespace Express {
    interface Request extends GeneralRequest {}
  }
}

export interface GeneralRequest {
  user: UserData;
  file: object;
  params: object;
  query: object;
  path: object;
}
