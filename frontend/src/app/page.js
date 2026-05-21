import React from 'react'
import Header from './Component/Header'
import { Main } from './Component/Main'
import Footer from './Component/Footer'
import Nav from './Component/Nav'
import BottomBar from './Component/bottomBar'
const Page = () => {
   return (
      <section>
         <Nav />
         <Header />
         <Main />
         <BottomBar />
         <Footer />
      </section>
   )
}
export default Page