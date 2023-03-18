import React, { useState } from 'react'
import About from './home/about'
import FAQ from './home/FAQ'
import Map from './home/map'
import OurTeam from './home/ourTeam'
import StartHome from './home/startHome'
import Utility from './home/Utility'
import Web3 from "web3";
import { AbiCollection } from '@/abi/abi'
import { toast } from 'react-toastify'

const HomeCustomerWeb = (props) => {

  const {wallet , setWallet } = props

  const [white , setWhite] = useState();
  const [publicmint , setPublicmint] = useState(false);
  const [cost , setCost ] = useState("0");

  const web3 = new Web3(Web3.givenProvider);
  const contractAddress = "0xc7a3d7e003E74c95f858608719DBaDb71fc5dCCC" ;
  const contract = new web3.eth.Contract(AbiCollection , contractAddress);

  async function giveWhiteListed(){
    await contract.methods.whitelisted(wallet).call().then(async (e)=>{
      console.log("w" , e)
      if (e === true) {
         await setCost("40000000000000000")
        setWhite(true)
      }else {
        setWhite(false)
        await setCost("50000000000000000")
      }
    })
  }
  async function givePublicMint() {
    await contract.methods.getpublicmint().call().then(async (e)=>{
      console.log("p" , e)
      if (e === true) {
        await setCost("50000000000000000")
         setPublicmint(true)
      }else {
        setPublicmint(false)
        await setCost("50000000000000000")
      }
    })
  }

  async function mint (){
    if (!wallet) {
      toast.error("Wallet is not connected")
      return ;
    }
   
    giveWhiteListed();

    givePublicMint();

    if (cost === "0") {
      toast.info("Please try again")
      return ;
    }
    const result =  await contract.methods.mint(window.ethereum.selectedAddress , 1 ).send({
      from:window.ethereum.selectedAddress ,
      value : cost
    })
  }
  async function balance (address) {
    await contract.methods.balanceOf(address).call().then(e=>console.log(e))
  }

  return (
    <div className='col-12 p-0 m-0'>
      <StartHome mint={mint}/>
      <About/>
      <Map/>
      <Utility/>
      <OurTeam/>
      <FAQ/>
      
    </div>
  )
}

export default HomeCustomerWeb
