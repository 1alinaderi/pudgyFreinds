import React from 'react'

const About = () => {
  return (
    <div id='about' className='col-12 p-0 m-0 d-flex justify-content-center align-items-center pb-5'>
      <div  className='p-0 col-11 col-lg-9 m-0 d-flex flex-wrap'>
        <div className='col-lg-6 px-4 col-12'>
            <p className='text_11 mb-4'>About Pudgy Friend</p>
            <p className='about_desc pt-3-' > 
            Pudgyland is the place where pudgy bears came to be. Pudgy bears
            Love playing games, telling stories, and eating food! They were enjoying their life, until one day one of
            the bears went For a walk at the beach, suddenly a shiny thing caught his eye…
            </p>
            <div className='w-100'>
                <a href='#mint' className='btn_home px-5 py-2'>
                    Mint Now
                </a>
            </div>
        </div>
        <div className='col-lg-6 pt-5 pt-lg-0 px-4 px-lg-5 col-12 col-sm-6'>
            <img src={"/about.png"} className="w-100"/>
        </div>

      </div>
    </div>
  )
}

export default About
