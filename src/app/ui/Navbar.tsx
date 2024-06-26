import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/createUser">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
}
