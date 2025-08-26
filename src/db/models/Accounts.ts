import { model, Schema } from "mongoose";
import { timeStamp } from "node:console";

const AccountsSchema = new Schema({
  username: { type: String, required: true, timeStamp: true },
  funds: { type: Number, required: false, timeStamp: true },
});

const Accounts = model("Accounts", AccountsSchema);
export default Accounts;
