import express from "express";
import { accounts } from "../accounts";
import router from "../api/accounts/accounts.routes";
import connectDb from "./db/connectDb";
const app = express();
connectDb();
app.use(express.json());

app.use("/accounts", router);

app.listen(8000, () => {
  console.log("server runing");
});
