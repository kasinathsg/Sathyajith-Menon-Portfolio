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

  const certificates = [
    {
      logo: "https://res.cloudinary.com/dvdljupjx/image/upload/v1745393857/ibm_logo_xior42.jpg",
      title: "Big Data Architecture",
      issuer: "IBM",
      issued: "Apr 2025",
      link: "https://courses.lpu.skillsnetwork.site/certificates/caa7ef398c0041d78e39701b2b678d19"
    },
    {
      logo: "https://res.cloudinary.com/dvdljupjx/image/upload/v1745393857/ibm_logo_xior42.jpg",
      title: "Introduction to Python",
      issuer: "IBM",
      issued: "Apr 2025",
      link: "https://courses.lpu.skillsnetwork.site/certificates/e309bb72b85c4b2790e3f62dd3c8d591"
    },
    {
      logo: "https://res.cloudinary.com/dvdljupjx/image/upload/v1745393857/ibm_logo_xior42.jpg",
      title: "Planning Analytics",
      issuer: "IBM",
      issued: "Apr 2025",
      link: "https://courses.lpu.skillsnetwork.site/certificates/0122c437c6524d588ac801f5e91a9b88"
    },
    {
      logo: "https://res.cloudinary.com/dvdljupjx/image/upload/v1745393857/ibm_logo_xior42.jpg",
      title: "RDBMS",
      issuer: "IBM",
      issued: "Apr 2025",
      link: "https://courses.lpu.skillsnetwork.site/certificates/ebad3a29680341fbbfeecc65b602f847"
    },
    {
      logo: "https://res.cloudinary.com/dvdljupjx/image/upload/v1745393857/ibm_logo_xior42.jpg",
      title: "Big Data 101",
      issuer: "IBM",
      issued: "Feb 2025",
      link: "https://courses.lpu.skillsnetwork.site/certificates/aeb2f6b6f043484e9ce03e36d1477fb3"
    },
    {
      logo: "https://res.cloudinary.com/dvdljupjx/image/upload/v1745393857/ibm_logo_xior42.jpg",
      title: "Business Intelligence",
      issuer: "IBM",
      issued: "Feb 2025",
      link: "https://courses.lpu.skillsnetwork.site/certificates/a3df43229d0444aca98b6e37b343a2d5"
    },
    {
      logo: "https://res.cloudinary.com/dvdljupjx/image/upload/v1745393857/ibm_logo_xior42.jpg",
      title: "Text Analytics 101",
      issuer: "IBM",
      issued: "Feb 2025",
      link: "https://courses.lpu.skillsnetwork.site/certificates/e053930555b94bfeb5bb9305d62c6102"
    },
    {
      logo: "https://res.cloudinary.com/dvdljupjx/image/upload/v1745393856/ibm_skillsbuild_student_ambassador_program_logo_e8fgwx.jpg",
      title: "Data Fundamentals",
      issuer: "IBM SkillsBuild Ambassador Program",
      issued: "Sep 2024",
      link: "https://students.yourlearning.ibm.com/certificate/share/fe1138203fewogICJsZWFybmVyQ05VTSIgOiAiMTkzMDAxMFJFRyIsCiAgIm9iamVjdElkIiA6ICJQTEFOLTBFQzJCQ0VBM0MzOSIsCiAgIm9iamVjdFR5cGUiIDogIkFDVElWSVRZIgp95ef68b9a0c-10"
    },
    {
      logo: "https://res.cloudinary.com/dvdljupjx/image/upload/v1745393856/cognitiveclass_logo_s3xpzf.jpg",
      title: "Reactive Architecture: Reactive Microservices",
      issuer: "Cognitive Class",
      issued: "Sep 2024",
      link: "https://courses.cognitiveclass.ai/certificates/accc16ff274b4e15a9c1b0445479e606#"
    },
    {
      logo: "https://res.cloudinary.com/dvdljupjx/image/upload/v1745393856/geeksforgeeks_logo_elsxyu.jpg",
      title: "Data Structures and Algorithms - Self Paced",
      issuer: "GeeksforGeeks",
      issued: "Aug 2024",
      link: "https://www.geeksforgeeks.org/certificate/ae540646675161eca3b72f50e4f405c0?utm_source=socials&utm_medium=cc_link"
    },
    {
      logo: "https://res.cloudinary.com/dvdljupjx/image/upload/v1745393856/coursera_logo_f7sy5m.jpg",
      title: "Algorithms on Strings",
      issuer: "Coursera",
      issued: "Feb 2024",
      link: "https://www.coursera.org/account/accomplishments/records/9TV2BREZXBR5"
    },
    {
      logo: "https://res.cloudinary.com/dvdljupjx/image/upload/v1745393856/coursera_logo_f7sy5m.jpg",
      title: "Ask Questions to Make Data-Driven Decisions",
      issuer: "Coursera",
      issued: "Apr 2023",
      link: "https://coursera.org/share/43a49f58de17e61fddc79f4011ea3d3e"
    },
    {
      logo: "https://res.cloudinary.com/dvdljupjx/image/upload/v1745393856/coursera_logo_f7sy5m.jpg",
      title: "Foundations: Data, Data, Everywhere",
      issuer: "Coursera",
      issued: "Feb 2023",
      link: "https://www.coursera.org/account/accomplishments/certificate/3G8T6N32JBM2"
    },
    {
      logo: "https://res.cloudinary.com/dvdljupjx/image/upload/v1745393856/infosys_logo_uo3wmu.jpg",
      title: "Python for Data Science",
      issuer: "Infosys",
      issued: "Feb 2023",
      link: "https://verify.onwingspan.com/"
    },
    {
      logo: "https://res.cloudinary.com/dvdljupjx/image/upload/v1745393856/estudentbook_logo_ref3rg.jpg",
      title: "Personal Branding",
      issuer: "eStudentBook",
      issued: "Nov 2022",
      link: "https://estudentbook.com/download-certificate/IS1gYGAKYAo="
    },
    {
      logo: "https://res.cloudinary.com/dvdljupjx/image/upload/v1745393856/1648218852378_oed7dg.jpg",
      title: "Awareness of 4.0 Technologies",
      issuer: "NxtWave",
      issued: "Oct 2022",
      link: "http://weurl.co/VomZSO"
    },
    {
      title: "Analysis of Algorithms (Princeton University)",
      issuer: "Coursera",
      logo: "https://res.cloudinary.com/dvdljupjx/image/upload/v1745393856/coursera_logo_f7sy5m.jpg",
      issued: "Feb 2023",
      link: "https://coursera.org/share/d7b70e0a75719ffd30b09e9b47c64aae"
    },
    {
      title: "Approximation Algorithms and Linear Programming",
      issuer: "Coursera",
      logo: "https://res.cloudinary.com/dvdljupjx/image/upload/v1745393856/coursera_logo_f7sy5m.jpg",
      issued: "Feb 2023",
      link: "https://coursera.org/share/129c24aecc3562b4d08047454113f824"
    },
    {
      title: "Dynamic Programming, Greedy Algorithms",
      issuer: "Coursera",
      logo: "https://res.cloudinary.com/dvdljupjx/image/upload/v1745393856/coursera_logo_f7sy5m.jpg",
      issued: "Feb 2023",
      link: "" // No more URLs provided; add later if available
    }
  ];
  

  return (
    <div className="bg-black scale-[0.85] min-h-screen px-6 md:px-20 py-12 font-karkala ">
      {/* Projects Section */}
      <h2 className="text-white text-3xl md:text-4xl font-bold mb-12">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {projects.map((project, index) => (
          <div key={index} className="bg-neutral-900 rounded-2xl shadow-md overflow-hidden transform transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
            <Image src={project.img} alt={project.title} width={600} height={400} className="w-full h-52 object-cover" />
            <div className="p-4">
              <h3 className="text-white text-lg md:text-xl font-semibold mb-1">{project.title}</h3>
              <p className="text-neutral-300 text-sm md:text-base font-normal">{project.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <h2 className="text-white text-3xl md:text-4xl font-bold mb-12">My Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {skills.map((skill, index) => (
          <div key={index} className="bg-neutral-900 rounded-2xl shadow-md p-6 transform transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
            <h3 className="text-white text-lg md:text-xl font-semibold mb-3">{skill.title}</h3>
            <ul className="list-disc list-outside pl-4 text-neutral-300 text-sm md:text-base space-y-1">
              {skill.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Certificates Section */}
      <h2 id="certificates" className="text-white text-3xl md:text-4xl font-bold mb-12">My Certificates</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {certificates.map((cert, index) => (
    <a
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
      key={index}
    >
      <div className="bg-neutral-900 rounded-2xl shadow-md p-4 flex items-start space-x-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-h-[150px]">
        <Image
          src={cert.logo}
          alt={`${cert.issuer} logo`}
          width={60}
          height={60}
          className="rounded-xl object-contain"
        />
        <div>
          <h3 className="text-white text-lg md:text-xl font-semibold mb-1">{cert.title}</h3>
          <p className="text-neutral-400 text-sm md:text-base">{cert.issuer}</p>
          <p className="text-neutral-500 text-sm md:text-base">Issued {cert.issued}</p>
        </div>
      </div>
    </a>
  ))}
</div>

    </div>
  )
}
