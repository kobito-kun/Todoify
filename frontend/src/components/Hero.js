import React from 'react';
import {Link} from 'react-router-dom';

function Hero() {
  return (
    <section className="h-auto p-10 bg-black text-white flex justify-center items-center">
      <div className="flex flex-col mt-10">
        <h3 className="text-center font-semibold text-4xl">Todoify</h3>

        <div className="p-4">
          <Link to="/dashboard">
            <button className="m-1 px-4 py-2 border-2 hover:bg-white duration-300 hover:text-black outline-none">Dashboard <i className="fas fa-users"></i></button>
          </Link>
          <button className="m-1 px-4 py-2 border-2 hover:bg-white duration-300 hover:text-black outline-none">Download <i className="fab fa-android"></i> <i className="fab fa-apple"></i></button>
        </div>
      </div>
    </section>
  )
}

export default Hero
