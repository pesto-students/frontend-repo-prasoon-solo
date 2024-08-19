import React from 'react';
import PestoAd from '../assets/images/pestoAd.jpg';
import ScalerAd from '../assets/images/scalerAd.jpg';
import GFG from '../assets/images/gfg.png';

function Ads() {
  return (
    <div className='bg-neutral-800 basis-1/3 h-screen p-4'>
      <article className='h-60 p-2 mt-1'>
        <img src={PestoAd} className='w-full h-full border rounded-xl' />
      </article>
      <article className='p-2 h-60 mt-2'>
        <img src={ScalerAd} className='w-full h-full border rounded-xl' />
      </article>
      <article className='p-2 h-60 mt-2'>
        <img src={GFG} className='w-full h-full border rounded-xl' />
      </article>
    </div>
  );
}

export default Ads;
