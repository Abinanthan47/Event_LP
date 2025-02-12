'use client';
import React from 'react';
import ImageMouseTrail from '../components/ui/mousetrail';
const images = [
  'https://i.ibb.co/3mSnjjGX/IMG-20250212-WA0001.jpg',
  'https://i.ibb.co/8LvJnT2b/IMG-20250212-WA0003.jpg?q=80&w=1200&auto=format',
  'https://i.ibb.co/zWgn6gr6/IMG-20250212-WA0002.jpg?q=80&w=1200&auto=format',
  'https://i.ibb.co/67W0Zzgt/IMG-20250212-WA0004.jpg?q=80&w=1200&auto=format',
  'https://www.sonatech.ac.in/blog/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-09-at-11.40.51-AM-1152x1536.jpeg?q=80&w=1200&auto=format',
  'https://i.ibb.co/LD2Nvx3c/IMG-20250212-WA0005.jpg',
  'https://i.ibb.co/wFtzJXMR/IMG-20250212-WA0006.jpg',
  'https://i.ibb.co/C5HZFF2f/IMG-20250212-WA0008.jpg',
  'https://i.ibb.co/pBNYrq5m/IMG-20250212-WA0007.jpg',
];
export default function Gallery() {
  return (
    <section>
      <ImageMouseTrail
        items={images}
        maxNumberOfImages={5}
        distance={25}
        imgClass="sm:w-40 w-28 sm:h-48 h-36">
        <article className="relative z-50 mix-blend-difference">
          <h1 className="lg:text-7xl md:text-6xl text-4xl tracking-wider text-center text-white font-semibold mix-blend-difference">
            GALLERY <br /> <span className='md:hidden text-sm font-100'>(TOUCH TO REVEAL)</span>
          </h1>
        </article>
      </ImageMouseTrail>
    </section>
  );
}
