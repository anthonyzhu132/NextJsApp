import Head from 'next/head';
import NavBar from './navBar';

const Layout = (props) => (
  <div>
    <Head>
      <title>BTC Daily</title>
    </Head>

    <NavBar/>
    {props.children}
  </div>
);

export default Layout;