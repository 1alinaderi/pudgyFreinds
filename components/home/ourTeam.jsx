import React from 'react'
import { Autoplay } from 'swiper'
import {SwiperSlide , Swiper} from "swiper/react"

const OurTeam = () => {
  return (
    <div id='team' className='col-12 d-flex p-0 flex-wrap  py-5 justify-content-center align-items-center '>
        <h1 className='title_home col-11  col-lg-9 p-0'>OUR TEAM MEMBERS</h1>
        <div className='col-11 col-lg-9 p-0 pt-4'>
            <Swiper 
            modules={Autoplay}
            spaceBetween={20}
            loop={true}
            className="p-0 m-0"
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              450: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 4,
              },
            }}
            autoplay={{
              delay:3000
            }}
            >
                <SwiperSlide className='slider_hover'>
                    <img src='https://pudgyfriends.io/wp-content/uploads/2023/01/5939-580x540.png' className='w-100'/>
                    <div className='d-flex flex-column pb-1 pt-3 justify-content-center align-items-center slider_text'>
                        <h2>Arnold Nilson</h2>
                        <p>Founder</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slider_hover'>
                    <img src='https://pudgyfriends.io/wp-content/uploads/2023/01/7010-580x540.png' className='w-100'/>
                    <div className='d-flex flex-column pb-1 pt-3 justify-content-center align-items-center slider_text'>
                        <h2>Lina Grey</h2>
                        <p>Co Founder</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slider_hover'>
                    <img src='https://pudgyfriends.io/wp-content/uploads/2023/01/7028-580x540.png' className='w-100'/>
                    <div className='d-flex flex-column pb-1 pt-3 justify-content-center align-items-center slider_text'>
                        <h2>Randy B</h2>
                        <p>NFT & Web Dev</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slider_hover'>
                    <img src='https://pudgyfriends.io/wp-content/uploads/2023/01/7302-580x540.png' className='w-100'/>
                    <div className='d-flex flex-column pb-1 pt-3 justify-content-center align-items-center slider_text'>
                        <h2>Chirss Moore</h2>
                        <p>Artist</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slider_hover'>
                    <img src='https://pudgyfriends.io/wp-content/uploads/2023/01/5716-580x540.png' className='w-100'/>
                    <div className='d-flex flex-column pb-1 pt-3 justify-content-center align-items-center slider_text'>
                        <h2>John</h2>
                        <p>Collab Manager</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slider_hover'>
                    <img src='https://pudgyfriends.io/wp-content/uploads/2023/01/4377-580x540.png' className='w-100'/>
                    <div className='d-flex flex-column pb-1 pt-3 justify-content-center align-items-center slider_text'>
                        <h2>James</h2>
                        <p>Mod</p>
                    </div>
                </SwiperSlide>
            </Swiper>
   
        </div>

    </div>
  )
}

export default OurTeam
