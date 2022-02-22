import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <nav>
        <ul>
          <li>
            <Link href="/" prefetch={false}>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about" prefetch={false}>
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default Navbar;
