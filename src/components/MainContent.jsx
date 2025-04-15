import React from "react";
import { SparklesCore } from "./ui/sparkles";

const MainContent = () => {
    return (
        <div
            className="w-full min-h-screen pt-40 pb-20"
            style={{ backgroundColor: "rgb(0,0,0)", color: "white" }}
        >
            <div className="flex items-center justify-between max-w-7xl mx-auto">
                <div className="flex-1  pr-8">
                    <h1 className="text-5xl pr-14  font-extrabold  text-center text-white">
                        SATHYAJITH MENON
                    </h1>
                    <div className="w-[40rem] h-28  relative">
                        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                        <SparklesCore
                            background="transparent"
                            minSize={0.4}
                            maxSize={1}
                            particleDensity={1200}
                            className="w-full h-full"
                            particleColor="#FFFFFF"
                        />


                        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                    </div>

                    <div className="pl-[5rem]">
                        <p className="text-lg mb-8">
                            I'm a data-driven problem solver with hands-on experience in real-time analytics, data visualization, and full-stack development.
                            With a strong foundation in Python, SQL, Power BI, and cloud platforms, I've built impactful solutions from AI-powered web apps to noise pollution trackers.
                            Passionate about transforming complex data into actionable insights that drive decision-making and business growth.
                        </p>

                        <div className="flex space-x-4 mb-8">
                            <button
                                className="text-white px-4 py-2 rounded"
                                style={{ backgroundColor: "rgb(133,14,53)" }}
                            >
                                Explore Now
                            </button>
                            <button
                                className="px-4 py-2 rounded border"
                                style={{
                                    borderColor: "rgb(133,14,53)",
                                    color: "rgb(133,14,53)",
                                }}
                            >
                                View More
                            </button>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div
                                className="border-l-4 h-24"
                                style={{ borderColor: "rgb(133,14,53)" }}
                            ></div>
                            <div className="text-lg">
                                <p className="mb-2">+91 8078119557</p>
                                <p className="mb-2">sathyajithmenon0208@gmail.com</p>
                                <p>Kerala, India</p>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="pr-12">
                    <img
                        alt="Profile picture of Sathyajith Menon"
                        className="rounded-full"
                        src="https://res.cloudinary.com/dvdljupjx/image/upload/v1744649957/EA000837-BD23-4E69-88F7-D9A0404826F7_df93qi.jpg"
                        style={{ width: "500px", height: "500px", objectFit: "cover" }}
                    />
                </div>
            </div>
        </div>
    );
};

export default MainContent;
