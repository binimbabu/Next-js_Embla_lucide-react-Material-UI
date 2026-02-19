'use client'

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';


const sliders =
[
    '/images/assemblyground.jpg',
    '/images/campus.jpg',
    '/images/classroom.jpg',
    '/images/lab.jpg',
    '/images/library.jpg'
]

export default function VerticalCarousel(){

   const [emblaRef] = useEmblaCarousel(
  {
    axis: 'y',
    loop: true,
    align: 'start',
    containScroll: 'trimSnaps'
  },
  [Autoplay({ delay: 2000 })]
)

   

    return(
         <div className="embla">
           <div className="embla__viewport" ref={emblaRef}>
             <div className="embla__container">
                {sliders.map((src, index) => {
                    return (
                             <div className="embla__slide" key={index}>
                              <Image src={src} alt={`Slide ${index + 1}`} fill style={{ objectFit: 'cover' }} />
                               </div>
                             );
                })}
             </div>
            </div>
         </div>
    );
}