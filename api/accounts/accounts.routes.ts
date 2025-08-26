import { Router } from "express";
import { accounts } from "../../accounts";
import {
  createNewAccount,
  deleteAccount,
  // createAnAccount,
  // deleteAnAccount,
  // getAccountById,
  getAllAccounts,
  updateAccountByid,
  // updateAnAccount,
} from "./accounts.controller";
const router = Router();

router.get("/", getAllAccounts);
router.post("/", createNewAccount);
router.delete("/:accountId", deleteAccount);
router.put("/:accountId", updateAccountByid);
// router.get("/:accountsId", getAccountById);

// router.post("/", createAnAccount);
// router.delete("/:accountsId", deleteAnAccount);
// router.put("/:accountId", updateAnAccount);
export default router;
