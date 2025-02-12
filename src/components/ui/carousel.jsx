'use client';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import React, {
  createContext,
  useContext,
  useEffect,
  useId,
} from 'react';
import { cn } from '../../lib/utils';

const CarouselContext = createContext(undefined);

export const useCarouselContext = () => {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error('useCarouselContext must be used within a CarouselProvider');
  }
  return context;
};

const Carousel = ({
  children,
  options,
  className,
  activeSlider,
  isScale = false,
  isAutoPlay = false,
}) => {
  const carouselId = useId();
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const autoplay = isAutoPlay ? Autoplay() : null;

  useEffect(() => {
    if (!emblaApi) return;
    if (autoplay) {
      autoplay.init(emblaApi);
    }
  }, [emblaApi, autoplay]);

  return (
    <div className={cn('embla bg-gray-800 text-white', className)} ref={emblaRef}>
      <CarouselContext.Provider value={{ emblaApi }}>
        {children}
      </CarouselContext.Provider>
    </div>
  );
};

export default Carousel;
