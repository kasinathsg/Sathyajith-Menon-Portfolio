import React from "react";
import { SparklesCore } from "./ui/sparkles";

const MainContent = () => {
    return (
        <div
            className="w-full min-h-screen pt-40 sm:pb-0 flex justify-center"
            style={{ backgroundColor: "rgb(0,0,0)", color: "white" }}
        >
            <div className="scale-[0.85] origin-top w-full px-4 md:px-0">
                <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between max-w-7xl mx-auto">
                    {/* Left: Text Content */}
                    <div className="flex-1 pr-8 w-full">
                        <h1 className="text-5xl font-extrabold text-center lg:text-left text-white ml-10 lg:ml-20">
                            SATHYAJITH MENON
                        </h1>
                        <div className="w-[40rem] max-w-full h-28 relative mx-auto lg:mx-0">
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
                            <p className="text-lg mb-8 text-center lg:text-left">
                                I'm a data-driven problem solver with hands-on experience in real-time analytics, data visualization, and full-stack development.
                                With a strong foundation in Python, SQL, Power BI, and cloud platforms, I've built impactful solutions from AI-powered web apps to noise pollution trackers.
                                Passionate about transforming complex data into actionable insights that drive decision-making and business growth.
                            </p>

                            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mb-8 items-center lg:items-start">
                                <a
                                    href="https://github.com/SATHYAJITHMENON"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white px-4 py-2 rounded"
                                    style={{ backgroundColor: "rgb(133,14,53)" }}
                                >
                                    Explore Now
                                </a>
                                <a
                                    href="https://linkedin.com/in/sathyajith-menon"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 rounded border"
                                    style={{
                                        borderColor: "rgb(133,14,53)",
                                        color: "rgb(133,14,53)",
                                    }}
                                >
                                    View More
                                </a>
                            </div>

                            <div className="flex flex-row items-start space-x-4 justify-center lg:justify-start mt-40 lg:mt-0">
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

                    {/* Right: Image */}
                    <div className="pr-12 mb-10 lg:mb-0 flex justify-center lg:justify-end ml-16 sm:mt-0 sm:ml-0">
    <img
        alt="Profile picture of Sathyajith Menon"
        className="rounded-full object-cover object-[50%_50%] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[500px] lg:h-[500px]"
        src="https://res.cloudinary.com/dvdljupjx/image/upload/v1750246642/IMG_3580_nr9enh.jpg"
    />
</div>

                </div>
            </div>
        </div>
    );
};

export default MainContent;
