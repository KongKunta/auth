"use client";
import { useFormState, useFormStatus } from "react-dom";
import Form from "./Form";
import connect from "../utils/connect";
export default function CreateUser({}) {
  function Submit() {
    const status = useFormStatus();
    return (
      <button disabled={status.pending} className="text-white p-2 mt-4">
        {status.pending ? "Loading..." : "Submit"}
      </button>
    );
  }
  const [state, formAction] = useFormState(connect, null);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col w-64 items-center border p-12 rounded-lg border-white">
        <Form action={formAction} className="flex items-center flex-col">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" className="text-black" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" className="text-black" />
          <Submit />
        </Form>
      </div>
    </div>
  );
}
