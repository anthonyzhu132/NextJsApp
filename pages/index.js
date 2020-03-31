//Root page or index page
import Layout from '../components/Layout';
import Fetch from 'isomorphic-unfetch';

import Prices from '../components/Prices';

const index = (props) => (
  <Layout>
    <div>
      <h1>Welcome to BitzPrice</h1>
      <p>Check current Bitcoin rate</p>
      <Prices bpi={props.bpi}/>
    </div>
  </Layout>
);

//Next has built in props method to set initial props right away
//Creating an async function

index.getInitialProps = async function() {

  //setting result as the fetch result from the API call to coin desk
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');

  //setting data as the results's fetch in JSON format
  const data = await res.json();

//returning the object(JSON) data, that has BPI as a key and the value which is the currency and price.
  return {
    bpi: data.bpi
  };
}

export default index;