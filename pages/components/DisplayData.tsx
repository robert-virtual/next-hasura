import { DocumentNode, useQuery } from "@apollo/client"
import {  ReactElement } from "react"

interface Props<T>{
  query:DocumentNode,
  render(data:T):ReactElement | ReactElement[]
}
 export function DisplayData<T>({query,render}:Props<T>) {
 const {loading,data,error} = useQuery<T>(query)
 if (loading) return <p>Cargando...</p>
 if (error) return <p>Ups an error has occured {error.message}</p>
 if (!data) return <p>There is no data to show</p>
    return <div className="d-grid">
    {
     render(data) 
    }
  </div>
 
}

// export default DisplayCustomers
