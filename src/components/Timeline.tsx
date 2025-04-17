"use client"

import Image from "next/image"
import React from "react"
import { Timeline } from "@/components/ui/timeline"

export function TimelineDemo() {
  const data = [
    {
      title: "Random Walk.AI",
      para: "Nov 2024 – Present",
      content: (
        <div className="font-kakrla">
          <p className="text-neutral-200 text-lg font-karla mb-8">
            As a full-time Data Analyst at Random Walk.AI, I contribute to high-impact, real-time projects focusing on community-centric innovation. My work spans collection, cleaning, modeling, and visualization using SQL, Python, Tableau, and Power BI to drive strategic insights and influence product and social outcomes.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://res.cloudinary.com/dvdljupjx/image/upload/v1744706033/kobu-agency-fVi9Ipk7f60-unsplash_hpifgq.jpg"
              alt="Random Walk Main"
              width={800}
              height={800}
              className="rounded-lg object-cover h-60 w-full shadow-lg"
            />
            <Image
              src="https://res.cloudinary.com/dvdljupjx/image/upload/v1744695943/2Ease_of_Business_Index_aumfhz.png"
              alt="Community Insights"
              width={500}
              height={500}
              className="rounded-lg object-cover h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Random Walk.AI",
      para: "July 2024 - August 2024",
      content: (
        <div className="font-kakrla">
          <p className="text-neutral-200 text-lg font-karla mb-8">
            Spearheaded the development of Noise Radar, a real-time sound pollution monitoring system using IoT and big data. Built scalable pipelines, integrated Firebase, and visualized noise levels globally with React and Power BI to inform urban planning decisions.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://res.cloudinary.com/dvdljupjx/image/upload/v1744696422/1681824975967_dd2zj2.png"
              alt="Noise Radar Dashboard"
              width={500}
              height={500}
              className="rounded-lg object-cover h-60 w-full shadow-lg"
            />
            <Image
              src="https://res.cloudinary.com/dvdljupjx/image/upload/v1744696421/13634_2022_884_Fig7_HTML_g59s3p.png"
              alt="IoT Visualization"
              width={500}
              height={500}
              className="rounded-lg object-cover h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Helen O'Grady International Preschool",
      para: "July 2023 - August 2023",
      content: (
        <div className="font-kakrla">
          <p className="text-neutral-200 text-lg font-karla mb-8">
            At Helen O&apos;Grady International Preschool, I developed a backend data system for handling operational data, transforming raw info into business-ready dashboards that empowered senior leadership to make key strategic decisions.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://res.cloudinary.com/dvdljupjx/image/upload/v1744696421/original-117b666236e9cd97ac1b35e7131ac968_ivmac4.webp"
              alt="Helen O'Grady Dashboard"
              width={500}
              height={500}
              className="rounded-lg object-cover h-60 w-full shadow-lg"
            />
            <Image
              src="https://res.cloudinary.com/dvdljupjx/image/upload/v1744695939/Top-5-Ways-for-Two-Back-End-Systems-to-Communicate_dqtzdl.jpg"
              alt="Backend Data"
              width={500}
              height={500}
              className="rounded-lg object-cover h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Learner Zone (SIP Abacus)",
      para: "June 2023 - July 2023",
      content: (
        <div className="font-kakrla">
          <p className="text-neutral-200 text-lg font-karla mb-8">
            As a Data Management & Accountant Intern at Learner Zone (SIP Abacus), I analyzed datasets for financial and student insights, automated reporting with Python and Excel, and produced visual reports with Power BI and Tableau.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://res.cloudinary.com/dvdljupjx/image/upload/v1744695940/course_img_big3_fvgq3w.jpg"
              alt="Learner Zone Financial Reports"
              width={500}
              height={500}
              className="rounded-lg object-cover h-72 w-full shadow-lg"
            />
            <Image
              src="https://res.cloudinary.com/dvdljupjx/image/upload/v1744697585/headway-5QgIuuBxKwM-unsplash_j4e4tx.jpg"
              alt="BI Tools Visualization"
              width={500}
              height={500}
              className="rounded-lg object-cover h-72 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="dark scale-[0.85] bg-black min-h-screen p-6 font-kakrla">
      <Timeline data={data} />
    </div>
  )
}
