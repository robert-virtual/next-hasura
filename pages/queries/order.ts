import { gql } from "@apollo/client"
import { ICustomer } from "./customer"

export interface IOrder{
  id?:number
  product:string
  purchase_price:string
  order_date:string
  discount_price:string
  customer?:ICustomer
}


export interface IGetOrders{
  order:IOrder[]
}
export const GET_ORDERS = gql`
query {
  order {
    id
    discount_price
    order_date
    product
    purchase_price
    customer {
      email
      first_name
      last_name
      phone
    }
  }
}
`
