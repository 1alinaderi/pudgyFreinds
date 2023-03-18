import { useSSRSafeId } from '@react-aria/ssr'
import React, { useEffect, useState } from 'react'
import {FaAlignJustify, FaClosedCaptioning, FaSearch, FaWallet, FaWindowClose} from "react-icons/fa"
import Web3 from "web3";
import { AbiCollection } from '@/abi/abi'
import { toast } from 'react-toastify'

const Header = (props) => {

    const web3 = new Web3(Web3.givenProvider);
    const contractAddress = "0xc7a3d7e003E74c95f858608719DBaDb71fc5dCCC" ;
    const contract = new web3.eth.Contract(AbiCollection , contractAddress);


    const {wallet , setWallet } = props 
    const logo = "/logo.png"
    const [show , setShow] = useState();
    const [connect  ,  setConnect ] = useState();

    async function handleConnect(){
        const accounts = await window.ethereum.request({
            method : "eth_requestAccounts"
        })
        await contract.methods.whitelisted(accounts[0]).call().then((e)=> {if(e === true)
            { toast.info("you're in whitelist") 
            console.log(accounts[0])
            console.log(e)
            }else{
            toast.info("you're not in whitelist")
            console.log(accounts[0])
            console.log(e)
        }
    })
        setWallet(accounts[0])
    }
  

    return (
    <div className='header_container col-12 p-0 m-0'>
        <div className=' col-12 justify-content-center align-items-center px-4 py-3 d-none d-lg-flex' >
        <div className='col-lg-3'>
            <img className='col-lg-4' src={logo} alt="logo" />
        </div>
        <div className='col-lg-6 d-flex justify-content-around link_container'>
            <span>
                <a href='#about'>
                About Pudgy Friends
                </a>
            </span>
            <span>
                <a href='#map'>
                Roadmap
                </a>
            </span>
            <span>
                <a href='#Utility'>
                Utility
                </a>
            </span>
            <span>
                <a href='#team'>
                OUR TEAM
                </a>
            </span>
            <span>
                <a href='#faq'>
            FAQs
                </a>
            </span>
        </div>
        <div className='col-lg-3 d-flex justify-content-center'>
            <button onClick={handleConnect} className='btn_home px-4 py-2'>
               {wallet ? "Connected" : "Connect Wallet"} 
            </button>
            
        </div>
        </div>
        <div style={{backgroundColor:'rgba(18,13,36, 1)'}} className='d-lg-none px-4 d-flex justify-content-between align-items-center py-3 px-2 col-12 '>
            <div>
                <FaAlignJustify onClick={() => show ? setShow(false) : setShow(true)} size={25}/>
            </div>
      
                <img className='logo_mobile' src={logo} alt="logo" />
       
            <div>
                <button onClick={handleConnect} className='btn_home py-1 px-3'>
                {wallet ? "Connected" : (<p>Connect <br/> Wallet </p>)}   
                </button>
            </div>

        </div>
        {show && (
                <div onClick={() => show ? setShow(false) : setShow(true)} className='show_container p-3'>
                <div className='col-12 p-0 m-0 d-flex justify-content-between'>
                <img className='logo_mobile' src={logo} alt="logo" />
                <FaWindowClose onClick={() => show ? setShow(false) : setShow(true)} size={25}/>
                </div>
                <div className='text_show pt-4 d-flex flex-column' >
                    <a href='#about'>
                    About Pudgy Friends
                    </a>
                    <a href='#map'>
                    Roadmap
                    </a>
                    <a href='#Utility'>
                    Utility
                    </a>
                    <a href='#team'>
                    OUR TEAM
                    </a>
                    <a href='#faq'>
                    FAQs
                    </a>
                </div>
            </div>
        )}
   

    </div>
    
  )
}

export default Header
