"use server";
import { redirect } from "next/navigation";
import User from "../models/User";
import dbConnect from "./dbConnect";

export default async function connect(previousState: any, formData: FormData) {
  await dbConnect();
  const userObj = {
    name: formData.get("name"),
    password: formData.get("password"),
  };

  const user = await new User(userObj);
  await user.save();

  redirect("/home");
}

/* bcrypt, refreshToken */
