import React, { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import { AnimatePresence, motion } from "framer-motion";

const FAQ = () => {
    const [show1 , setShow1] = useState();
    const [show2 , setShow2] = useState();
    const [show3 , setShow3] = useState();
    const [show4 , setShow4] = useState();
    const [show5 , setShow5] = useState();
  return (
    <div id='faq' className='col-12 d-flex justify-content-center align-itemd-center flex-wrap pt-5 p-0'>
      <div className='col-11 col-lg-9 d-flex align-items-start flex-wrap'>
        <div className='col-lg-6 p-0'>
            <p className='text_11 '>FREQUENTLY ASKED QUESTIONS</p>
            <h1 className='title_home '>Most Popular Questions</h1>
            <div className='w-100 p-0 py-4'>
                <div onClick={()=>show1 ? setShow1(false) : setShow1(true)} className='faq_container w-100 d-flex justify-content-between p-0 pt-3 px-4 my-3'>
                    <p className=''>What is the total supply of Pudgy Friends?</p>
                    <FaAngleDown className='mt-1 bbb' color='#fff'/>
                </div>
                {show1 && (
                    <p className='p-3'>
                        Pudgy Friends is a collection of 7777 unique NFTs.
                    </p>
                )}
                 <div onClick={()=>show2 ? setShow2(false) : setShow2(true)} className='faq_container w-100 d-flex justify-content-between p-0 pt-3 px-4 my-3'>
                    <p className=''>What is the royalty percentage?</p>
                    <FaAngleDown className='mt-1 bbb' color='#fff'/>
                </div>
                {show2 && (
                    <p className='p-3'>
                       0%
                    </p>
                )}
                   <div onClick={()=>show3 ? setShow3(false) : setShow3(true)} className='faq_container w-100 d-flex justify-content-between p-0 pt-3 px-4 my-3'>
                    <p className=''>How many can I mint?</p>
                    <FaAngleDown className='mt-1 bbb' color='#fff'/>
                </div>
                {show3 && (
                    <p className='p-3'>
                      WL mint is limited to 5 NFTs per wallet & Public is limited to 10 NFTs.
                    </p>
                )}
                   <div onClick={()=>show4 ? setShow4(false) : setShow4(true)} className='faq_container w-100 d-flex justify-content-between p-0 pt-3 px-4 my-3'>
                    <p className=''>How can I contact the Pudgy friend's team?</p>
                    <FaAngleDown className='mt-1 bbb' color='#fff'/>
                </div>
                {show4 && (
                    <p className='p-3'>
                    You can join our discord server. Our team is ready to assist you!
                    </p>
                )}
                    {/* <div onClick={()=>show5 ? setShow5(false) : setShow5(true)} className='faq_container w-100 d-flex justify-content-between p-0 pt-3 px-4 my-3'>
                    <p className=''>What are the utilities?</p>
                    <FaAngleDown className='mt-1 bbb' color='#fff'/>
                </div>
                {show5 && (
                    <p className='p-3'>
                   You can have access to Special Airdrops, Stake your NFTs and earn a passive income and also get the chance to the whitelist of future projects. NFT holders will be awarded with special prizes!
                    </p>
                )} */}
                <p className='p-5'>
                If you don`t find an answer, please meet us in discord to discuss.
                </p>
            </div>
        </div>
        <div className='col-lg-6 p-5  '>
            <img style={{borderRadius: "20% 0% 20% 0%"}} className='w-100' src='https://cdn.pudgyfriends.io/wp-content/uploads/2023/01/21.png' />
        </div>

      </div>
    </div>
  )
}

export default FAQ
