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
import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const HomeCustomerWeb = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const {wallet , setWallet } = props

  return (
    <div className='col-12 p-0 m-0'>
      <StartHome/>
      <About/>
      <Map/>
      <Utility/>
      <OurTeam/>
      <FAQ/>
      <div className='section' ref={ref}>
      <span
        style={{
          transform: isInView ? "translateX(130vw )" : "translateX(-50vw )",
          transition: "all 10s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        PUDGY FREINDS
      </span>
    </div>

      
    </div>
  )
}

export default HomeCustomerWeb
