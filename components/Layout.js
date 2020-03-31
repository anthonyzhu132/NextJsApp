import Head from 'next/head';
import NavBar from './navBar';

const Layout = (props) => (
  <div>
    <Head>
      <title>BTC Daily</title>
      <link rel="stylesheet" href="https://bootswatch.com/4/cosmo/bootstrap.min.css"></link>
    </Head>

    <NavBar/>
    {props.children}
  </div>
);

export default Layout;