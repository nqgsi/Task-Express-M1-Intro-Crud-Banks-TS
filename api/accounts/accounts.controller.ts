import { Request, Response } from "express";

import { accounts } from "../../accounts";

export const getAllAccounts = (req: Request, res: Response) => {
  res.status(200).json(accounts);
};
export const getAccountById = (req: Request, res: Response) => {
  const { accountsId } = req.params;
  if (!accountsId) {
    return res.status(400);
  }
  const acc = accounts.find((acc) => acc.id === +accountsId);
  if (!accounts) {
    res.status(404).json({ message: "not found try another id  " });
  }
  return res.json(acc);
};
export const createAnAccount = (req: Request, res: Response) => {
  const id =
    accounts.length > 0 ? Math.max(...accounts.map((acc) => acc.id)) + 1 : 1;

  const acc = { id, ...req.body };
  accounts.push(acc);

  return res.status(201).json(acc);
};

export const deleteAnAccount = (req: Request, res: Response) => {
  const { accountsId } = req.params;
  if (!accountsId) {
    return res.status(400);
  }
  const acc = accounts.find((acc) => acc.id === +accountsId);
  const deletedAccount = accounts.splice(+accountsId, 1);

  return res.status(200).json({
    message: "Account deleted successfully",
    deleted: deletedAccount[0],
  });
};
export const updateAnAccount = (req: Request, res: Response) => {
  const { accountId } = req.params;
  if (!accountId) {
    return res.status(400);
  }

  const foundAccount = accounts.find((account) => account.id === +accountId);
  if (foundAccount) {
    foundAccount.funds = req.body.funds;
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Account not found" });
  }
};
