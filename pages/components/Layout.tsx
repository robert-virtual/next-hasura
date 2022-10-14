import Link from "next/link";
import { FC, ReactElement } from "react";

interface Props {
  children:ReactElement
}

 const Layout:FC<Props> = ({children})=> {
 return <div className="flex min-h-screen flex-col items-center justify-center py-2">
  <h1 className="text-6xl font-bold">
    Nextjs, Graphql and Hasura 
  </h1>

  <p className="mt-3 text-2xl">
    Hasura creates a api(graphql or rest) for you with a given database
  </p>
 <nav className="mt-10 flex gap-10">
  <Link href={"/"}>Customers</Link>
  <Link href={"/orders"}>Orders</Link>
 </nav>
 <main className=".main">
   {children}
 </main>
  <footer className=".footer">
    <a
      className="flex items-center justify-center gap-2"
      href="email:robertocastillo945@gmail.com"
    >
      Created by Roberto Castillo {" "}
      (robertocastillo945@gmail.com)
    </a>

  </footer>
</div>
}

export default Layout
