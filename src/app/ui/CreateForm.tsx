"use client";
import { useFormState } from "react-dom";
const initialState = { name: "Siuuu", password: "Siuuu" };

async function connect(previousState: any, formData: FormData) {
  const name = {
    name: formData.get("name"),
    password: formData.get("password"),
  };

  console.log(name);
}

export default async function CreateUser({}) {
  const [state, formAction] = await useFormState(connect, initialState);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col w-64 items-center border p-12 rounded-lg border-white">
        <form className="flex items-center flex-col">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" className="text-black" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" className="text-black" />
          <button formAction={formAction} className="text-white p-2 mt-4 ">
            Create
          </button>
        </form>
      </div>
    </div>
  );
}
