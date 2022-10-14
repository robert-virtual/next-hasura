import { NextPage } from "next";
import Head from "next/head";
import { DisplayData } from "../components/DisplayData";
import { GET_ORDERS, IGetOrders } from "../queries/order";

const OrdersPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Orders - Next Hasura</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {DisplayData<IGetOrders>({
        query: GET_ORDERS,
        render: (data) => {
        console.log({data});
          return data.order ?data.order.map(({ id, product, customer }) => (
            <div key={id!.toString()} className="card">
              <h3 className="card-title">{product}</h3>
              <p className="card-text">
                {customer?.first_name} - {customer?.phone}
              </p>
            </div>
          )):<p>no orders</p>
        },
      })}
    </>
  );
};

export default OrdersPage;
