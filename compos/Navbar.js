import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/vercel.svg" width={128} height={77} />
      </div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/ninjas">Ninjaj Listing</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
