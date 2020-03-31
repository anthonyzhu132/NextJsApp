//Rendering about page
import Link from 'next/link';

const about = () => (
  <div>
    <li><Link href="/"><a>Home</a></Link></li>
    <li><Link href="/about"><a>About</a></Link></li>
    <h1>About BTC Daily</h1>
    <p>Application to view Bitcoin prices!</p>
  </div>
);

export default about; 