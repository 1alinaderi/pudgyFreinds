import { AbiCollection } from '@/abi/abi';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header'
import React, { useEffect, useState } from 'react'
import Web3 from 'web3';
import Head from 'next/head'
import moment from 'moment';

import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

const Mint = () => {
  const text = "gello"
  const [white , setWhite] = useState();
  const [wallet  ,  setWallet ] = useState();
  const [publicmint , setPublicmint] = useState(false);
  const [cost , setCost ] = useState("0");
  const [owner , setOwner ] = useState(false)
  const [countdown, setCountdown] = useState(null);
  const [supply , setSuplly ] = useState();
  const [balance , setBalance ] = useState() ;
  const [canmint , setCanmint ] = useState() ;
  const date = moment('3/21/2023 10', 'M/D/YYYY H').format('YYYY/MM/DD HH:mm');

  const web3 = new Web3(Web3.givenProvider);

  const contractAddress = "0x153108a8960c4a1e15f35342016494f8b756af91" ;

  const contract = new web3.eth.Contract(AbiCollection , contractAddress);

   function giveWhiteListed(){
     if (white === true) {
        setCost("40000000000000000")
      }else {
        setCost("50000000000000000")
      }
  }

  async function _totalSupply(){
    await contract.methods.totalSupply().call().then((e)=>{
      setSuplly(e);
    })
  }

  useEffect (()=>{
    _totalSupply() ;
  } , [])

  useEffect(()=>{
    if(wallet == 0x760D3718dBAeDa08a109Ec52E3E0e2B34b128aD3){
      setCanmint(true)
      }else if (countdown <= "0d 0h 0m 0s" ) {
      setCanmint(true)
    }else{
      setCanmint(false)
    }
  } , [wallet]) 

  async function mint (){
    if (!wallet) {
      toast.error("Wallet is not connected")
      return ;
    }

    await giveWhiteListed();

    if (cost === "0") {
      toast.info("Please try again")
      return ;
    }
    if (wallet == 0x760D3718dBAeDa08a109Ec52E3E0e2B34b128aD3) {
       setOwner(true) 
    }

    const gas = await contract.methods?.mint(window?.ethereum?.selectedAddress , 1 ).estimateGas();
    
    const result =  await contract.methods.mint(window.ethereum.selectedAddress , 1 ).send({
      from:window.ethereum.selectedAddress ,
      gas ,
      value : owner ? 0 : cost , 
    }
    , function(e) {
      console.log(e)
    } 
    )
  }

  async function balanceOf () {
    await contract.methods.balanceOf(window.ethereum.selectedAddress).call().then((e)=>{
      setBalance(e)
    })
  }
  
  useEffect(() => {
    const targetDate = moment('2023-03-22 16:00:00');
    const interval = setInterval(() => {
      const diff = targetDate.diff(moment());
      const duration = moment.duration(diff);
      const days = Math.floor(duration.asDays());
      const hours = duration.hours();
      const minutes = duration.minutes();
      const seconds = duration.seconds();
      setCountdown(`${days ? days + "d" : ""} ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='imp_all'>
      <Head>
        <title>Pudgy Freinds Mint </title>
        <meta name="description" content="Pudgy Freinds NFT Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://cdn.pudgyfriends.io/wp-content/uploads/website/logo.png" />
      </Head>
      <Header fromMint white={white} setWallet={setWallet} wallet={wallet} setWhite={setWhite} balanceOf={balanceOf} />
      <div className='p-5 w-100 '>
        <div className='col-12 d-flex justify-content-center flex-wrap px-4 '>
          <div className='col-lg-3 pb-5 pb-lg-0 p-0 m-0 '>
            <h1 className=' text_44'>Time To Mint :</h1>
            <h1 className='text_44 text-white '>{countdown}</h1>
            <div className='text-white text_55 mt-5'>
              Minted NFT :<br/>
    
              {supply} / 7777 
              
      
            </div>
          </div>
          <div className='col-lg-7  d-flex justify-content-center flex-wrap p-0 m-0 px-0 px-md-5'>

            <img src='https://cdn.pudgyfriends.io/wp-content/uploads/website/GIF.gif' className='col-md-10 col-11 p-0 '/>
         <div className='col-12 text_55 text-center text-white py-4'>
            {balance ? "You Minted " + balance + " NFT" : "Connect Wallet First"}
         </div>
         <div className='col-md-8 '>
          <button disabled={canmint ? false : true} onClick={mint} className='btn_mint col-12 py-4' >
            {canmint ? "MINT NOW" : "YOU MUST WAIT"}  
          </button>
         </div>

          </div>

        </div>

      </div>
      <div>       
      <div style={{ overflow: "hidden" }}>
    
    </div>
  </div>
      <Footer fromFooter />
      <ToastContainer position="top-center" />
   
    </div>
  )
}

export default Mint 
