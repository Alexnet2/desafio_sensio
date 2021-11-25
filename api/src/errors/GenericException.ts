import { dirnameRoot } from "@utils";
import { appendFileSync } from "fs";
import moment from "moment";

export default class GenericException extends Error {
  public status: number;
  public error: string;
  constructor(message: string, status = 500, name: null | string = null) {
    super();
    if (name != null) {
      appendFileSync(
        `${dirnameRoot}/src/tmp/logs/${this.name}_${moment().format(
          "YYYY-MM-DD"
        )}.log`,
        `${message}=>${moment().format("YYYY-MM-DD HH:mm:ss")}\n`
      );
    }
    this.error = message;
    this.status = status;
  }
}
