import Link from 'next/link';

const NavBar = () => (
  <ul>
    <li><Link href="/index"><a>Home</a></Link></li>
    <li><Link href="/about"><a>About</a></Link></li>
  </ul>
);

export default NavBar;