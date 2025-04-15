import React from "react";
import Image from "next/image";

export default function Section() {
  return (
    <section className="flex items-center justify-center h-screen bg-white">
        
      <div className="relative w-full h-full">
        <Image
          src="https://res.cloudinary.com/dvdljupjx/image/upload/v1738783146/image_cagfqz.svg"
          alt="Centered Image"
        //   width={1300}
        //   height={1300}
          layout="fill"  // Ensures the image covers the full width/height of the container
          objectFit="cover"  // Ensures the image covers the entire container while maintaining its aspect ratio
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
