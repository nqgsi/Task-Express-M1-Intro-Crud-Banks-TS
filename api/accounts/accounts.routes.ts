import { Router } from "express";
import { accounts } from "../../accounts";
import {
  createAnAccount,
  deleteAnAccount,
  getAccountById,
  getAllAccounts,
  updateAnAccount,
} from "./accounts.controller";
const router = Router();

router.get("/", getAllAccounts);

router.get("/:accountsId", getAccountById);

router.post("/", createAnAccount);
router.delete("/:accountsId", deleteAnAccount);
router.put("/:accountId", updateAnAccount);
export default router;
