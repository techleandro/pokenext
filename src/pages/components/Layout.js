import Head from "next/head"
import Footer from "./Footer"
import Navbar from "./Navbar"


const Layout = ({children}) => {
  return (
    <>
    <Head>
        <link rel="shortcut icon" href="/public/images/favicon.ico" />
        <title>PokeNext</title>
    </Head>
    <Navbar/>
    <main className="main-container">{children}</main>
    <Footer/>
    </>
  )
}

export default Layout