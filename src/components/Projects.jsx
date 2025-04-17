"use client"

import Image from "next/image"
import React from "react"

export function MyProjects() {
  const projects = [
    {
      title: "Realify",
      subtitle: "AI-Based Image Integrity & Deepfake Detection System",
      img: "https://res.cloudinary.com/dvdljupjx/image/upload/v1744709612/deepfake-image-A_md63mo.png",
    },
    {
      title: "Tamil Grammarly",
      subtitle: "AI-Powered Language Processing Web App",
      img: "https://res.cloudinary.com/dvdljupjx/image/upload/v1744709611/hq720_icnq2t.jpg",
    },
    {
      title: "Noise Radar",
      subtitle: "IoT-Driven Environmental Data Visualization System",
      img: "https://res.cloudinary.com/dvdljupjx/image/upload/v1744709611/Noise-Jamming-Techniques-in-Radar-ECM-general_tia2wk.jpg",
    },
  ]

  const skills = [
    {
      title: "Programming & Scripting Languages",
      items: ["Python", "Java", "C++", "JavaScript", "C", "SQL"],
    },
    {
      title: "Data Analysis & Business Intelligence",
      items: [
        "Data Cleaning & Preprocessing (Pandas, NumPy)",
        "Exploratory Data Analysis (EDA)",
        "Dashboarding & Storytelling (Power BI, Tableau, Excel)",
        "Data Visualization & Insights Generation",
        "IBM Cognos, IBM TM1",
      ],
    },
    {
      title: "Big Data & Database Management",
      items: [
        "Hadoop, Hive, Pig, MapReduce",
        "ETL Pipelines & Data Flow Optimization",
        "SQL Query Optimization",
        "MySQL, MongoDB, Firebase, Zoho Analytics",
        "Google Sheets (Data Automation & Collaboration)",
      ],
    },
    {
      title: "Web & Full-Stack Development",
      items: [
        "Frontend: HTML, CSS, JavaScript, React.js",
        "Backend: Node.js, Express.js",
        "API Integration (RESTful APIs)",
        "Firebase Functions & Cloud Integration",
        "Responsive & Interactive UI Design",
      ],
    },
    {
      title: "Cloud Technologies & AI Tools",
      items: [
        "Google Cloud Platform (GCP)",
        "Amazon Web Services (AWS)",
        "Prompt Engineering & Text Analytics",
        "AI API Integration (Gemini API)",
        "IoT with Arduino (Sensor Data Collection & Analysis)",
      ],
    },
    {
      title: "Professional & Soft Skills",
      items: [
        "Critical Thinking & Analytical Reasoning",
        "Problem Solving & Data-Driven Decision Making",
        "Project Management & Execution",
        "Team Collaboration & Cross-functional Communication",
        "Leadership, Adaptability, and Learning Agility",
      ],
    },
  ]

  return (
    <div className="bg-black scale-[0.85] min-h-screen px-6 md:px-48 py-12 font-karkala mt-60">
      {/* Projects Section */}
      <h2 className="text-white text-3xl md:text-4xl font-bold mb-12">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-neutral-900 rounded-2xl shadow-md overflow-hidden transform transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1"
          >
            <Image
              src={project.img}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <h3 className="text-white text-base md:text-lg font-semibold mb-1">
                {project.title}
              </h3>
              <p className="text-neutral-300 text-xs md:text-sm font-normal">
                {project.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <h2 className="text-white text-3xl md:text-4xl font-bold mb-12">
        My Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-neutral-900 rounded-2xl shadow-md p-6 transform transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1"
          >
            <h3 className="text-white text-base md:text-lg font-semibold mb-3">
              {skill.title}
            </h3>
            <ul className="list-disc list-inside text-neutral-300 text-xs md:text-sm space-y-1">
              {skill.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
