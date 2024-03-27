export default function CreateUser() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col w-64 items-center border p-12 rounded-lg border-white">
        <form className="flex items-center flex-col">
          <label htmlFor="name">Name</label>
          <input type="text" />

          <label htmlFor="password">Password</label>
          <input type="password" />
        </form>
        <button className="text-white p-2 mt-4 ">Create</button>
      </div>
    </div>
  );
}
