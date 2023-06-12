import {
  deleteUser,
  getUser,
  initDatabase,
  insertUser,
} from "./utils/database";
import initMonitor from "./utils/initMonitor";
import express from "express";
import proxy from "express-http-proxy";

const msTitle = "Gateway";
initDatabase();
initMonitor();

const msPort = 5000;
const ms = express();

ms.get("/", (req, res) => {
  res.send("Hello from Gateway!");
});
ms.get("/isAlive", (req, res) => {
  res.send("Yes");
});

ms.use("/auth", proxy("http://localhost:5001"));
ms.use("/music", proxy("http://localhost:5002"));

ms.listen(msPort, async () => {
  console.info(`${msTitle} is running!`);
});
