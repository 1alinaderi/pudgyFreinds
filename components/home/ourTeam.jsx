import React from 'react'
import { Autoplay } from 'swiper'
import {div , Swiper} from "swiper/react"

const OurTeam = () => {
  return (
    <div id='team' className='col-12 d-flex p-0 flex-wrap  py-5 justify-content-center align-items-center '>
        <h1 className='title_home col-11  col-lg-9 p-0'>OUR TEAM MEMBERS</h1>
        <div className='col-11 col-lg-9 p-0 pt-4 d-flex flex-wrap'>
                <div className='slider_hover col-lg-3 col-sm-6 col-md-4 col-12'>
                    <img src='https://cdn.pudgyfriends.io/wp-content/uploads/website/1.png' className='w-100'/>
                    <div className='d-flex flex-column pb-1 pt-3 justify-content-center align-items-center slider_text'>
                        <h2>Andrew </h2>
                        <p>Developer</p>
                    </div>
                </div>
                <div className='slider_hover col-lg-3 col-sm-6 col-md-4 col-12'>
                    <img src='https://cdn.pudgyfriends.io/wp-content/uploads/website/2.png' className='w-100'/>
                    <div className='d-flex flex-column pb-1 pt-3 justify-content-center align-items-center slider_text'>
                        <h2>Armin</h2>
                        <p>Founder</p>
                    </div>
                </div>
                <div className='slider_hover col-lg-3 col-sm-6 col-md-4 col-12'>
                    <img src='https://cdn.pudgyfriends.io/wp-content/uploads/website/3.png' className='w-100'/>
                    <div className='d-flex flex-column pb-1 pt-3 justify-content-center align-items-center slider_text'>
                        <h2>James </h2>
                        <p>Social Media manager</p>
                    </div>
                </div>
                <div className='slider_hover col-lg-3 col-sm-6 col-md-4 col-12'>
                    <img src='https://cdn.pudgyfriends.io/wp-content/uploads/website/4.png' className='w-100'/>
                    <div className='d-flex flex-column pb-1 pt-3 justify-content-center align-items-center slider_text'>
                        <h2>Sofia </h2>
                        <p>Artist</p>
                    </div>
                </div>
   
   
        </div>

    </div>
  )
}

export default OurTeam
