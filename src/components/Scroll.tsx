"use client";
import React from "react";

import Image from "next/image";
import { ContainerScroll } from "./ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    (<div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
             When editor meets  <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                The Developer
              </span>
            </h1>
          </>
        }>
        <Image
   src="https://res.cloudinary.com/dvdljupjx/image/upload/v1739163485/Screenshot_2025-02-10_102738_knnx8o.png"
          alt="heros"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false} />
      </ContainerScroll>
    </div>)
  );
}
