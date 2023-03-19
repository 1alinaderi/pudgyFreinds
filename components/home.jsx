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
  const [owner , setOwner ] = useState(false)

  const web3 = new Web3(Web3.givenProvider);
  const contractAddress = "0x153108a8960c4a1e15f35342016494f8b756af91" ;
  const contract = new web3.eth.Contract(AbiCollection , contractAddress);

  async function giveWhiteListed(){
    await contract.methods.whitelisted(wallet).call().then(async (e)=>{
      
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
    if (wallet == 0x760D3718dBAeDa08a109Ec52E3E0e2B34b128aD3) {
       setOwner(true)
    }
    
    const result =  await contract.methods.mint(window.ethereum.selectedAddress , 1 ).send({
      from:window.ethereum.selectedAddress ,
      value : owner ? 0 : cost ,
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
