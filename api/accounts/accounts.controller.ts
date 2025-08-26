import { Request, Response } from "express";
import Accounts from "../../src/db/models/Accounts";
// import { accounts } from "../../accounts";
import { Document } from "mongoose";
export const getAllAccounts = async (req: Request, res: Response) => {
  const accounts = await Accounts.find();
  return res.json(accounts);
};
export const createNewAccount = async (req: Request, res: Response) => {
  try {
    const accounts = await Accounts.create(req.body);
    return res.json(accounts);
  } catch (error) {
    console.log(error);
  }
  return res.status(201);
};
export const deleteAccount = async (req: Request, res: Response) => {
  const { accountId } = req.params;

  try {
    const account = await Accounts.findByIdAndDelete(accountId);
    return res.status(200).json({ messege: `${account} deleted ` });
  } catch (error) {
    console.log(error);
    return res.status(404);
  }
  return res.status(200);
};

export const updateAccountByid = async (req: Request, res: Response) => {
  try {
    const { accountId } = req.params;
    const accounts = await Accounts.findById(accountId);
    if (!accounts) {
      return res.status(404).json({
        message: `this id : ${accountId} was not found try another one`,
      });
    }
    await accounts.updateOne(req.body);
    return res.json({ messeg: `${accounts} updated 👌🏻` });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
// export const getAccountById = (req: Request, res: Response) => {
//   const { accountsId } = req.params;
//   if (!accountsId) {
//     return res.status(400);
//   }
//   const acc = accounts.find((acc) => acc.id === +accountsId);
//   if (!accounts) {
//     res.status(404).json({ message: "not found try another id  " });
//   }
//   return res.json(acc);
// };
// export const createAnAccount = (req: Request, res: Response) => {
//   const id =
//     accounts.length > 0 ? Math.max(...accounts.map((acc) => acc.id)) + 1 : 1;

//   const acc = { id, ...req.body };
//   accounts.push(acc);

//   return res.status(201).json(acc);
// };

// export const deleteAnAccount = (req: Request, res: Response) => {
//   const { accountsId } = req.params;
//   if (!accountsId) {
//     return res.status(400);
//   }
//   const acc = accounts.find((acc) => acc.id === +accountsId);
//   const deletedAccount = accounts.splice(+accountsId, 1);

//   return res.status(200).json({
//     message: "Account deleted successfully",
//     deleted: deletedAccount[0],
//   });
// };
// export const updateAnAccount = (req: Request, res: Response) => {
//   const { accountId } = req.params;
//   if (!accountId) {
//     return res.status(400);
//   }

//   const foundAccount = accounts.find((account) => account.id === +accountId);
//   if (foundAccount) {
//     foundAccount.funds = req.body.funds;
//     res.status(204).end();
//   } else {
//     res.status(404).json({ message: "Account not found" });
//   }
// };
