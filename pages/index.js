//Root page or index page
import Layout from '../components/Layout';
import Fetch from 'isomorphic-unfetch';

const index = (props) => (
  <Layout>
    <div>
      <h1>Welcome to BTC Daily</h1>
    </div>
  </Layout>
);

//Next has built in props method to set initial props right away
//Creating an async function
index.getIntiailProps = async function() {
  //setting result as the fetch result from the API call to coin desk
  const result = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
  
  //setting data as the results's fetch in JSON format
  const data = await result.json();


  //returning the object(JSON) data, that has BPI as a key and the value which is the currency and price.
  return {
    bpi: data.bpi
  }

};

export default index; 