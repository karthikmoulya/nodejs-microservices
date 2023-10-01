import express from "express";

import { getAllUsers, deleteUser, updateUser } from "../controller/users";

export default (router: express.Router) => {
  router.get("/users", getAllUsers);
  router.delete("/users/:id", deleteUser);
  router.put("/users/:id", updateUser);
};
