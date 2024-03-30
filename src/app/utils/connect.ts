import { redirect } from "next/navigation";
import dbConnect from "./dbConnect";
import mongoose from "mongoose";

export default async function connect(previousState: any, formData: FormData) {
  dbConnect();
  const name = {
    name: formData.get("name"),
    password: formData.get("password"),
  };
  console.log(name);
  redirect("/home");
}

/* bcrypt */
