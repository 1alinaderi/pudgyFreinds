import React from 'react'

const Map = () => {
  return (
    <div id='map' className='col-12 py-5 p-0 d-flex justify-content-center align-items-center flex-wrap'>
      <h1 className='title_home w-100 col-lg-9 col-11 pb-5'>Roadmap</h1>
      <div className='col-lg-9 col-11 d-flex flex-wrap map_container p-5'>
        <div className='col-12 p-0 m-0 align-items-center map_child py-4 d-flex flex-wrap px-5 my-4'>
            <div className='col-lg-6 p-0 d-flex align-items-center col-12 flex-wrap'>
                <img src="/1.png" className='image_fixed_size' />
                <h4 className='ml-sm-4 m-0 pt-3 pt-sm-0 phase' >Phase 1</h4>
            </div>
            <div className='col-lg-6 p-0 pt-4 pt-lg-0 '>
                <p className='desc_map'>
                Launch of Twitter, discord & Website development together with Twitter and discord growth.
                </p>
            </div>
        </div>
        <div className='col-12 p-0 m-0 align-items-center map_child py-4 d-flex flex-wrap px-5 my-4'>
            <div className='col-lg-6 p-0 d-flex align-items-center col-12 flex-wrap'>
                <img src="/2.png" className='image_fixed_size' />
                <h4 className='ml-sm-4 m-0 pt-3 pt-sm-0 phase' >Phase 2</h4>
            </div>
            <div className='col-lg-6 p-0 pt-4 pt-lg-0 '>
                <p className='desc_map'>
           Marketing to provide exposure to Pudgy friends and Pudgy Friends story reveal. Smart contract development and Hosting multiple Twitter spaces right after.
                </p>
            </div>
        </div>
        <div className='col-12 p-0 m-0 align-items-center map_child py-4 d-flex flex-wrap px-5 my-4'>
            <div className='col-lg-6 p-0 d-flex align-items-center col-12 flex-wrap'>
                <img src="/3.png" className='image_fixed_size' />
                <h4 className='ml-sm-4 m-0 pt-3 pt-sm-0 phase' >Phase 3</h4>
            </div>
            <div className='col-lg-6 p-0 pt-4 pt-lg-0 '>
                <p className='desc_map'>
              7777 NFTs will be sold and Pudgy friends NFT staking will be launched. More actions TBA,..
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Map
