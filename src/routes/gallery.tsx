import GalleryBg from "@/assets/img/bg/gallery2.jpg";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import  galleryData  from "@/constants/gallery";

interface GalleryImage {
  id: number;
  src: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const heroRef = useRef(null);

  const { scrollYProgress: heroYProgress } = useScroll({
    target: heroRef,
    offset: ["start 100px", "end start"],
  });

  const heroBgY = useTransform(heroYProgress, [0, 1], ["1%", "100%"]);

  const renderGallerySection = (
    title: string,
    images: GalleryImage[],
    description?: string
  ) => (
    <section className="mb-24">
      <div className="mb-8">
        <h2 className="text-5xl font-heading mb-4">{title}</h2>
        {description && (
          <p className="text-gray-300 text-lg max-w-3xl">{description}</p>
        )}
      </div>
      <Carousel opts={{ align: "start", loop: true }} className="w-full">
        <CarouselContent className="-ml-2 md:-ml-4">
          {images.map((image) => (
            <CarouselItem
              key={image.id}
              className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
            >
              <div
                className="relative group cursor-pointer overflow-hidden rounded-xl aspect-[4/3]"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-medium"></p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -left-12" />
        <CarouselNext className="hidden md:flex -right-12" />
      </Carousel>
    </section>
  );

  return (
    <div className="bg-[#1F0303] min-h-screen">
      <motion.section
        ref={heroRef}
        className="px-14 lg:px-40 bg-cover bg-center relative bg-neutral-600 bg-blend-overlay h-[60vh] flex items-center z-10"
        style={{
          backgroundImage: `url(${GalleryBg})`,
          backgroundPositionY: heroBgY,
        }}
      >
        <div className="relative z-10">
          <motion.h1
            className="text-6xl lg:text-8xl text-[#861919] font-heading-italic drop-shadow-[-8px_8px_0_rgba(0,0,0,1)]"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Event Gallery
          </motion.h1>
        </div>
      </motion.section>

      <div className="mx-auto px-4 md:px-16 py-12 bg-[#1F0303]">
        {renderGallerySection("Day 1", galleryData.day1)}
        {renderGallerySection("Day 2", galleryData.day2)}
        {renderGallerySection("Dev Day", galleryData.devday)}
      </div>

      {/* Enhanced Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-5xl max-h-[80vh] p-4 relative">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <img
              src={selectedImage.src}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="mt-4">
              <p className="text-white text-center text-lg"></p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
