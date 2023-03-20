import React from 'react'
import { FaDiscord, FaEnvelope, FaTwitter } from 'react-icons/fa'

const Footer = ({fromFooter}) => {
  return (
    <div  className='col-12 flex-wrap p-0 p-5 d-flex justify-content-center'>
      <div className='p-5 d-flex flex-wrap justify-content-center col-lg-10 border-bottom '>
        {!fromFooter &&  (
      <div className=' col-lg-10 p-0 d-flex flex-wrap'>
          <div className='col-lg-4 p-0 d-flex justify-content-center align-items-center flex-column '>
              <div className='envelope'>
                <FaEnvelope size={23}  color='#7040F2' />
              </div>
              <a href='mailto:pudgyfriends@gmail.com'  className='pt-3 text-white'>pudgyfriends@gmail.com</a>
          </div>
          <div className='col-lg-4 p-0 d-flex justify-content-center align-items-center flex-column '>
            <a className='text-white d-flex justify-content-center flex-wrap flex-column align-items-center' href='https://twitter.com/PudgyFriends'>
            <div className='Twitter'>
                <FaTwitter size={23} color='#fff' />
              </div>
              <p className='pt-3'>We are on Twitter <br/> @PudgyFriends</p>
            </a>
           
          </div>
          <div className='col-lg-4 p-0 d-flex justify-content-center align-items-center flex-column '>
            <a className='text-white d-flex justify-content-center flex-wrap flex-column align-items-center' href='https://discord.gg/GDMT3CfJCb'>
            <div className='Discord'>
                <FaDiscord size={23} color='#fff' />
              </div>
              <p className='pt-3'>We are on Discord <br/> @PudgyFriends</p>
            </a>
           
          </div>
        </div> 
        )} 
   

      </div>
      <div className='p-5 d-flex flex-wrap justify-content-center col-lg-10  '>
        <div style={{gap:"20px"}} className=' col-lg-10 p-0 d-flex flex-wrap justify-content-center '>
          <a className='text-white' href='#about'>
          About Pudgy Friends
          </a>
          <a className='text-white' href='#map'>
          Roadmap
          </a>
          <a className='text-white' href='#Utility'>
          Utility
          </a>
          <a className='text-white' href='#team'>
          Our Team
          </a>
          <a className='text-white' href='#faq'>
          FAQs
          </a>
        </div>
      </div>
      <p className='pt-4 text-center'>
        Copyright © 2023 Pudgy Friends. All Rights Reserved
        <br/>
        <a className='text-white text-center' href='mailto:malinaderi1@outlook.com'>
        powered by malinaderi1@outlook.com
      </a>
      </p>
   

    </div>
  )
}

export default Footer
