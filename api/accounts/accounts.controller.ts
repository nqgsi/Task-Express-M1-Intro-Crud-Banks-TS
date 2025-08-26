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
  const { accountsId } = req.params;

  if (!accountsId) {
    return res.status(400).json({ message: "try another id" });
  }

  const index = accounts.findIndex((a) => a.id == +accountsId);

  if (index === -1) {
    return res.status(404).json({ message: "Account not found" });
  }

  accounts[index] = {
    id: +accountsId,
    username: req.body.name ?? accounts[index]?.username,
    funds: req.body.balance ?? accounts[index]?.funds,
  };

  return res.json(accounts[index]);
};
