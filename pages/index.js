//Root page or index page
import Link from 'next/link';

const index = () => (
  <div>
    <li><Link href="/"><a>Home</a></Link></li>
    <li><Link href="/about"><a>About</a></Link></li>
    <h1>Welcome to BTC Daily</h1>
  </div>
);

export default index; 