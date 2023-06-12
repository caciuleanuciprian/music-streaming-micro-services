import initMonitor from "../../utils/initMonitor";
import express from "express";

const msTitle = "Authentication";
initMonitor();

const msPort = 5001;
const ms = express();

ms.get("/", (req, res) => {
  res.send(`Hello from ${msTitle}!`);
});

ms.listen(msPort, async () => {
  console.info(`${msTitle} is running!`);
});
