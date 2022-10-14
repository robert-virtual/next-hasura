import type { NextPage } from "next";
import Head from "next/head";
import { DisplayData } from "./components/DisplayData";
// import Image from 'next/image'

import { GET_CUSTOMER, IGetCustomer } from "./queries/customer";
const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Next Hasura</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {DisplayData<IGetCustomer>({
        query: GET_CUSTOMER,
        render: (data) =>
          data.customer.map(({ id, email, first_name }) => (
            <div key={id.toString()} className="card">
              <h3 className="card-title">{first_name}</h3>
              <p className="card-text">{email}</p>
            </div>
          )),
      })}
    </>
  );
};

export default Home;
