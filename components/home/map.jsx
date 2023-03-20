import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

const Map = () => {
  return (
    <div id='map' className='col-12 py-5 p-0 d-flex justify-content-center align-items-center flex-wrap'>
      <h1 className='title_home w-100 col-lg-9 col-11 pb-5'>Roadmap</h1>
      <div className='col-lg-11 col-xl-9 col-11 d-flex flex-wrap map_container justify-content-between p-5'>
        <div className='col-12 col-lg-3 p-0 m-0  align-items-start map_child py-4 d-flex flex-wrap px-5 my-4'>
            <div className='col-lg-12 justify-content-center p-0 d-flex align-items-center col-12 flex-wrap'>
              <Swiper autoplay={{
                delay:4000
              }} >
                <SwiperSlide>
                <img src="https://cdn.pudgyfriends.io/wp-content/uploads/website/34.png" className='image_fixed_size' />
                </SwiperSlide>
                <SwiperSlide>
                <img src="https://cdn.pudgyfriends.io/wp-content/uploads/website/35.png" className='image_fixed_size' />
                </SwiperSlide>
                <SwiperSlide>
                <img src="https://cdn.pudgyfriends.io/wp-content/uploads/website/51.png" className='image_fixed_size' />
                </SwiperSlide>
                <SwiperSlide>
                <img src="https://cdn.pudgyfriends.io/wp-content/uploads/website/53.png" className='image_fixed_size' />
                </SwiperSlide>
              </Swiper>
             
                <h4 className='ml-sm-4 m-0 pt-3 pt-sm-4 phase' >Phase 1</h4>
            </div>
            <div className='col-lg-12 p-0 pt-4 pt-lg-3 '>
                <p className='desc_map'>
                Launch of Twitter, discord & Website development together with Twitter and discord growth.
                </p>
            </div>
        </div>
        <div className='col-12 col-lg-3 p-0 m-0 align-items-start map_child py-4 d-flex flex-wrap px-5 my-4'>
            <div className='col-lg-12 justify-content-center p-0 d-flex align-items-center col-12 flex-wrap'>
            <Swiper autoplay={{
              delay:4000
            }} >
                <SwiperSlide>
                <img src="https://cdn.pudgyfriends.io/wp-content/uploads/website/215.png" className='image_fixed_size' />
                </SwiperSlide>
                <SwiperSlide>
                <img src="https://cdn.pudgyfriends.io/wp-content/uploads/website/221.png" className='image_fixed_size' />
                </SwiperSlide>
                <SwiperSlide>
                <img src="https://cdn.pudgyfriends.io/wp-content/uploads/website/291.png" className='image_fixed_size' />
                </SwiperSlide>
                <SwiperSlide>
                <img src="https://cdn.pudgyfriends.io/wp-content/uploads/website/454.png" className='image_fixed_size' />
                </SwiperSlide>
              </Swiper>
                <h4 className='ml-sm-4 m-0 pt-3 pt-sm-4 phase' >Phase 2</h4>
            </div>
            <div className='col-lg-12 p-0 pt-4 pt-lg-3 '>
                <p className='desc_map'>
           Marketing to provide exposure to Pudgy friends and Pudgy Friends story reveal. Smart contract development and Hosting multiple Twitter spaces right after.
                </p>
            </div>
        </div>
        <div className='col-12 col-lg-3 p-0 m-0 align-items-start map_child py-4 d-flex flex-wrap px-5 my-4'>
            <div className='col-lg-12 justify-content-center p-0 d-flex align-items-center col-12 flex-wrap'>
               <Swiper autoplay={{
                delay:4000
               }} >
                <SwiperSlide>
                <img src="https://cdn.pudgyfriends.io/wp-content/uploads/website/292.png" className='image_fixed_size' />
                </SwiperSlide>
                <SwiperSlide>
                <img src="https://cdn.pudgyfriends.io/wp-content/uploads/website/389.png" className='image_fixed_size' />
                </SwiperSlide>
                <SwiperSlide>
                <img src="https://cdn.pudgyfriends.io/wp-content/uploads/website/402.png" className='image_fixed_size' />
                </SwiperSlide>
                <SwiperSlide>
                <img src="https://cdn.pudgyfriends.io/wp-content/uploads/website/418.png" className='image_fixed_size' />
                </SwiperSlide>
              </Swiper>
                <h4 className='ml-sm-4 m-0 pt-3 pt-sm-4 phase' >Phase 3</h4>
            </div>
            <div className='col-lg-12 p-0 pt-4 pt-lg-3 '>
                <p className='desc_map'>
              7777 NFTs will be sold and Pudgy friends NFT staking will be launched. More actions TB...
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Map
