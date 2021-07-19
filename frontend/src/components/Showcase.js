import React from 'react'
import PhonePNG from '../assets/phone.png';
import PeoplePNG from '../assets/people.png';

function Showcase() {
  return (
    <>
      <div className="w-full grid lg:grid-cols-2 lg:h-96 p-10">
        <div className="flex justify-center items-center">
          <img className="w-2/4" src={PhonePNG} alt="Phone" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h4 className="text-2xl font-bold">Download our App</h4>
          <p className="lg:w-96 my-4">Using high native technology we've innovatively created a mobile phone application for this project. Supporting Andriod {"&"} IOS Devices while also syncing across all databases.</p>
          <button className="px-4 py-2 border shadow-lg hover:border-black bg-black hover:bg-white hover:text-black text-white duration-300">Download Here <i className="fas fa-download"></i></button>
        </div>
      </div>
      <div className="w-full grid lg:grid-cols-2 lg:h-96 p-10">
        <div className="flex flex-col justify-center items-center">
          <h4 className="text-2xl font-bold">Used by Millions</h4>
          <p className="lg:w-96 my-4">Our innovative technology is being used by millions across the globe. With over +1.000.000 users visiting our website monthly. Easy to use. Fast to use and Safe to use.</p>
          <button className="px-4 py-2 border shadow-lg hover:border-black bg-black hover:bg-white hover:text-black text-white duration-300">Start Now <i className="fas fa-users"></i></button>
        </div>
        <div className="flex justify-center items-center lg:order-last order-first">
          <img className="w-2/4" src={PeoplePNG} alt="Phone" />
        </div>
      </div>
    </>    
  )
}

export default Showcase
