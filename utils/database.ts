import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

var supabase: any;
export async function initDatabase() {
  dotenv.config();
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_KEY;
  if (!supabaseUrl || !supabaseKey) {
    throw new Error("Missing SUPABASE_URL or SUPABASE_KEY");
  } else {
    supabase = createClient(supabaseUrl, supabaseKey);
    console.log("Database initialized!");
  }
}

export async function insertUser(username: string, password: string) {
  checkIfDbInit();
  const { data, error } = await supabase
    .from("users")
    .insert([{ username: username, password: password }]);
  if (error) {
    console.error(error);
  }
  console.log(`Succesfully inserted user ${username}!}`);
}

export async function getUser(username: string) {
  checkIfDbInit();
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("username", username);
  if (error) {
    console.error(error);
  }
  console.log(data);
  return data;
}

export async function deleteUser(username: string) {
  checkIfDbInit();
  const { error } = await supabase
    .from("users")
    .delete()
    .eq("username", username);
  if (error) {
    console.error(error);
  }
  console.log(`Succesfully deleted user ${username}!`);
}

const checkIfDbInit = () => {
  if (supabase == null) throw new Error("Database not initialized!");
};
