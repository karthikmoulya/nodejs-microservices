import express from "express";

import auth from "./auth";
import users from "./users";

const router = express.Router();

export default (): express.Router => {
  users(router);
  auth(router);
  return router;
};
