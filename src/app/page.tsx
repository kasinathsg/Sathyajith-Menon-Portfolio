import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";
import { MyProjects } from "@/components/Projects";
import { MacbookScrollDemo } from "@/components/SthyaMac";
import ContactPage from "@/components/Contact";
import { TimelineDemo } from "@/components/Timeline";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="fixed top-0 left-0 h-screen w-[250px] z-10">
        <Sidebar />
      </div>
      <div className="ml-[250px]">
        <div id="mainContent">
          <MainContent />
        </div>
        <div id="macbookScroll">
          <MacbookScrollDemo />
        </div>
        <div id="timelineDemo">
          <TimelineDemo />
        </div>
        <div id="myProjects">
          <MyProjects />
        </div>
        <ContactPage />
      </div>
    </div>
  );
}
