import { redirect } from "next/navigation";

export default async function connect(previousState: any, formData: FormData) {
  const name = {
    name: formData.get("name"),
    password: formData.get("password"),
    previousState: previousState,
  };
  console.log(name);
  redirect("/");
}
