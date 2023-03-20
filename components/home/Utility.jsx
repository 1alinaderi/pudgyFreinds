import React from 'react'

const Utility = () => {
  return (
    <div id='Utility' className='col-12 p-0 m-0 d-flex flex-wrap justify-content-center py-5'>
        <div className='col-md-9 col-11 p-0 m-0 d-flex flex-wrap align-items-center'>
            <div className='col-lg-6 d-flex justify-content-center p-0 px-4'>
             <img src="https://cdn.pudgyfriends.io/wp-content/uploads/website/image_6487327.JPG"  className='col-lg-10 col-12' />
            </div>
            <div className='col-lg-6 p-0 px-4 d-flex align-items-center list_container flex-wrap'>
              <p>
              Each holder receives exclusive access to staking, airdrops, privet discord channel, IRL events access, and more.
              </p>
                <ul className='list_container'>
                    <li className='py-3'>Staking income is based on how rare your NFT is. The rarer the NFT, The higher the income. ( The rarity is based on the NFTs body color)</li>
                    <li className='py-3'>Every holder will have access to Pudgy Friends' private channel. Awesome opportunities and airdrops will be available for each holder.</li>
                    <li className='py-3'>Pudgy Friends will host IRL events and each holder will receive an invitation to these events!</li>
                </ul>
            </div>

        </div>

    </div>
  )
}

export default Utility
