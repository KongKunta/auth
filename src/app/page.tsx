import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1> Hello World </h1>
      <Link key="forbidden" href="/forbidden">
        <p>Forbidden</p>
      </Link>
    </div>
  );
}
