import useEmblaCarousel from "embla-carousel-react";
import Image from 'next/image';
import {useState, useEffect} from 'react';
import React from "react";
import { IconButton } from '@mui/material';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const sliders = [
    {src:'/images/assemblyground.jpg', title:'Assembly Ground', description:'Morning gathering and events'},
    {src:'/images/campus.jpg', title:'Assembly Ground', description:'Morning gathering and events'},
    {src:'/images/classroom.jpg', title:'Campus', description:'Morning gathering and events'},
    {src:'/images/lab.jpg', title:'Campus', description:'Beautiful learning environment'},
    {src:'/images/library.jpg', title:'Assembly Ground', description:'Beautiful learning environment'}
]

export default function LearningBehindClassroom(){
 const [progress, setProgress] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {loop:true, align: 'start',containScroll: 'trimSnaps'}
    )

   

    useEffect(()=>{
      if(!emblaApi) return;

      const onSelect =() =>{
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext())
      }
      emblaApi.on('select', onSelect)

      const onScroll = () =>{
        const scrollProgress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
        setProgress(scrollProgress);
      }

      emblaApi.on('scroll', onScroll);
      emblaApi.on('resize', onScroll);

      onSelect();

      onScroll();

      return()=>{
        emblaApi.off('scroll', onScroll);
        emblaApi.off('resize', onScroll);
        emblaApi.off('select', onSelect)
      }

    }, [emblaApi])

    function scrollPrev(){
        emblaApi && emblaApi.scrollPrev();
    }

    function scrollNext(){
        emblaApi && emblaApi.scrollNext();
    }

    return (
        <div className="embla__Learning">
            <IconButton className="embla__arrow embla__arrow--left" onClick={scrollPrev} disabled={!canScrollPrev}>
                <ArrowLeft size={20} />
            </IconButton>
            <IconButton className="embla__arrow embla__arrow--right" onClick={scrollNext} disabled={!canScrollNext}>
                <ArrowRight size={20} />
            </IconButton>
          <div className="embla__viewport__Learning" ref={emblaRef}>
            <div className="embla__container__Learning">
                {sliders.map((slide, index) => {
                 return (
                    <React.Fragment key={index}>
                      <div className="embla__slide__Learning">
                        <Image src={slide.src} alt={`Slide ${index+1}`} fill style={{objectFit: 'cover'}} />
                        <div className="embla__overlay__Learning">
                        <h3>{slide.title}</h3>
                        <p>{slide.description}</p>
                      </div>
                      </div>     
                    </React.Fragment>
                 )
                })}
            </div>
          </div>
          <div className="embla__progress__Learning">
            <div className="embla__progress-bar__Learning" style={{width: `${progress * 100}%`}}>
            </div>
          </div>
        </div>
    )

}