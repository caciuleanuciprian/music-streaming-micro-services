import initMonitor from "../../utils/initMonitor";
import express from "express";
import axios from "axios";
import dotenv from "dotenv";

const msTitle = "Music";
initMonitor();
dotenv.config();

const msPort = 5002;
const ms = express();
const SPOTIFY_API_URL = "https://accounts.spotify.com/api/token";

ms.get("/", async (req, res) => {
  //@ts-ignore
  const params = new URLSearchParams({
    grant_type: "client_credentials",
    client_id: process.env.SPOTIFY_CLIENT_ID,
    client_secret: process.env.SPOTIFY_CLIENT_SECRET,
  });
  console.log(params);
  res.send(`Hello from ${msTitle}!`);
  const response = await axios.post(SPOTIFY_API_URL, params);
  console.log(response.data.access_token);
});

ms.listen(msPort, async () => {
  console.info(`${msTitle} is running!`);
});
