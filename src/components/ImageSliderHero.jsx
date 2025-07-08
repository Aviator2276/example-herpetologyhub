'use client';
import { motion } from 'motion/react';
import React from 'react';
import { ImagesSlider } from './ui/images-slider';

const ImageSliderHero = () => {
  const images = [
    'https://images.unsplash.com/photo-1590418270220-243198c900cc?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1666730140132-e7d83575c599?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1710511293214-66815f801476?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1724925189414-8dbde23354a4?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1724925188921-224ff39d6311?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1723578494205-062672024c4a?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1645769622994-ed1975721bdc?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1614141228455-a68f8131b939?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1416138645715-930585fe4ce2?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1633081528930-91c8cc07f3d7?w=800&auto=format&fit=crop',
  ];
  return (
    <ImagesSlider className='h-[50rem]' images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className='z-2 flex flex-col justify-center items-center'
      >
        <motion.p className='font-bold text-main text-4xl md:text-6xl text-center bg-clip-text bg-gradient-to-b py-4'>
          Welcome to
          <br />
          Herpetology Hub!
        </motion.p>
        <p className='text-lg text-center font-base text-slate-50 max-w-sm sm:max-w-full'>
          Dive into everything herpetology: learn, explore, and connect!
        </p>
      </motion.div>
    </ImagesSlider>
  );
};

export default ImageSliderHero;
