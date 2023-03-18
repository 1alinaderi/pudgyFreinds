import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import HomeCustomerWeb from '@/components/home'
import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [wallet  ,  setWallet ] = useState();
  return (
    <>
      <Head>
        <title>Pudgy Freinds</title>
        <meta name="description" content="Pudgy Freinds NFT Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className='imp_all'>
      <Header wallet={wallet} setWallet={setWallet}/>
       <ToastContainer position="top-center" />
       <HomeCustomerWeb  wallet={wallet} setWallet={setWallet}/>

      <Footer/>
      </div>
   
    </>
  )
}
