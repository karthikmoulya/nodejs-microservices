import { NextFunction, Request, Response } from "express";

import { getUserBySessionToken } from "../db/users";

export const isAuthenticated = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const sessionToken = req.cookies["auth-cookie"];
    if (!sessionToken) {
      return res.sendStatus(403);
    }
    const user = await getUserBySessionToken(sessionToken);
    if (!user) {
      return res.sendStatus(403);
    }
    req.user = user;
    return next();
  } catch (err) {
    return res.sendStatus(400);
  }
};
