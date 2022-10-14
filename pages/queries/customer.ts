import { gql } from "@apollo/client";
import { IOrder } from "./order";


export interface ICustomer{
  first_name:string
  email:string
  id:number
  phone:string
  orders: IOrder
}
export interface IGetCustomer{
  customer:ICustomer[]
}
export const GET_CUSTOMER = gql`
query {
  customer {
    first_name
    email
    id
    phone
    orders {
      product
      purchase_price
      order_date
      discount_price
    }
  }
}
`
