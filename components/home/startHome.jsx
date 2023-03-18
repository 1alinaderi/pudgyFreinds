import React from 'react'

const StartHome = (props) => {
    const { mint} = props;
    return (
        <div id='mint' className='w-100  d-flex justify-content-center align-items-center flex-wrap'>
            <div className=' col-10 p-0 m-0 start_home_bg mt-lg-5 py-5 py-lg-0 d-flex alig-items-center flex-wrap flex-column justify-content-center'>
                <p className='text_11'>Story-telling NFT collection</p>
                <h1 className='d-flex text_22'>Pudgy <p className='ml-4'> Friends</p></h1>
                <p className='text_33'>A collection of 7777 NFTs living on Ethereum blockchain.</p>
                <div className='col-lg-3 col-md-6 col-12  p-0 m-0'>
                    <button  onClick={mint} className='btn_home px-5 py-2' >
                     Mint Now
                    </button>
                </div>
                <div className='text_nft d-flex  d-lg-none pt-5'>
                <div className='pr-4'>
                       <h1  style={{color:"#7040F2"}}>7,777</h1>
                       <p>NFTs</p>
                </div>
                 <div className='pl-4'>
                        <h1 style={{color:"#7040F2"}}>
                            150+
                        </h1>
                        <p>
                        Traits
                        </p>
                 </div>
                </div>
                <div className='text_nft_number d-none d-lg-block'>
                    <div className='mb-5'>
                       <h1>7,777</h1>
                       <p>NFTs</p>
                    </div>
                    <div className='pl-4'>
                        <h1>
                            150+
                        </h1>
                        <p>
                        Traits
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StartHome
