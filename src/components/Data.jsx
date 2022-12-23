import React from 'react';
import { BsFillCloudsFill } from 'react-icons/bs';
import { WiHumidity } from 'react-icons/wi';
import { FaWind } from 'react-icons/fa';
import { BiCloudRain } from 'react-icons/bi';
const Data = () => {
  return (
    <>
      <div className='text-white flex flex-col w-full justify-center items-center text-center mt-20'>
        <div className="icon flex flex-col items-center">
          <BsFillCloudsFill className='text-8xl'/>
          <p className='mt-2'>Cloudy</p>
        </div>
        <div className="temp">
          <h1 className='text-8xl'>20°</h1>
          <div className="h-l flex items-center justify-center mt-2">
            <p>H:24°</p>
            <p>L:15°</p>
          </div>
          <div className="mess mt-10 text-xl">It's a nice time for a walk</div>
        </div>
        <div className="data flex w-full justify-between p-2 mt-16">
          <div className="humidity flex flex-col justify-center items-center gap-5 bg-gradient-to-t from-white-bottom to-white-top p-5 rounded-xl">
            <WiHumidity />
            <p>69%</p>
          </div>
          <div className="wind flex flex-col justify-center items-center gap-5 bg-gradient-to-t from-white-bottom to-white-top p-5 rounded-xl">
            <FaWind />
            <p>
              5<sub>km/h</sub>
            </p>
          </div>
          <div className="rain flex flex-col justify-center items-center gap-5 bg-gradient-to-t from-white-bottom to-white-top p-5 rounded-xl">
            <BiCloudRain />
            <p>25%</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Data;
