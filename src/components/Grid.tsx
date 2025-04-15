"use client";
import React from "react";
import { LayoutGrid } from "./ui/layout-grid";
import { IconArrowRight } from "@tabler/icons-react";
import { HeroHighlightDemo } from "./HeroText";

export function LayoutGridDemo() {
  return (
    <div className="h-screen py-20 w-full">
      {/* <h2 className="text-center text-4xl font-bold text-black "> */}
    <HeroHighlightDemo/>
      {/* </h2> */}
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Punjaabb!!</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
      <p className="flex items-center text-base font-medium text-blue-400 cursor-pointer">
        Click here to watch <IconArrowRight className="ml-2" size={20} />
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Ratatatataaa</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
      <p className="flex items-center text-base font-medium text-blue-400 cursor-pointer">
        Click here to watch <IconArrowRight className="ml-2" size={20} />
      </p>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Paradise on Earth
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
      <p className="flex items-center text-base font-medium text-blue-400 cursor-pointer">
        Click here to watch <IconArrowRight className="ml-2" size={20} />
      </p>
    </div>
  );
};

const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Tulian Lake</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
      <p className="flex items-center text-base font-medium text-blue-400 cursor-pointer">
        Click here to watch <IconArrowRight className="ml-2" size={20} />
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://res.cloudinary.com/dvdljupjx/image/upload/v1739160164/capture_1739160127077_c8aadk.png",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://res.cloudinary.com/dvdljupjx/image/upload/v1739160623/capture_1739160581052_r28zld.png",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://res.cloudinary.com/dvdljupjx/image/upload/v1739161618/capture_1739161538578_vwg6bw.png",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://res.cloudinary.com/dvdljupjx/image/upload/v1739161124/capture_1739161097986_fyoki0.png",
  },
];
