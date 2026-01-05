import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const ProjectsPage = () => {
  return (
    <div className=" overflow-hidden bg-white min-h-fit  max-w-7xl mx-auto px-4 md:px-24 py-12 w-full gap-24 flex items-center rounded-xl flex-col  justify-center">
      
      <Link
        href="/"
        className="inline-flex items-center gap-2 md:text-sm text-xl text-gray-600 hover:text-black"
      >
        <ArrowLeft size={18} />
        <span>Return to Home</span>
      </Link>

     
      <header className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Mental Health Companion App
        </h1>
        <p className="text-gray-600 leading-relaxed">
          A student-focused mental health platform designed to improve access
          to emotional support through thoughtful UI design and AI-assisted
          interactions.
        </p>
      </header>

      
      <section className="grid grid-cols-1 gap-6">
        <div className="rounded-xl overflow-hidden shadow-sm border">
          <Image
            src="/project25.png"
            alt="Dashboard view"
            width={1900}
            height={900}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-xl overflow-hidden shadow-sm border">
          <Image
            src="/project24.png"
            alt="Chat interface"
            width={1900}
            height={900}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-xl overflow-hidden shadow-sm border">
          <Image
            src="/project23.png"
            alt="Mood tracking"
            width={1900}
            height={900}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

    
      <section className="max-w-3xl space-y-14">

        <div>
          <h2 className="text-xl font-semibold mb-3">Problem Statement</h2>
          <p className="text-gray-700 leading-relaxed">
            University students face increasing academic pressure, emotional
            stress, and social challenges, yet access to mental health support
            remains limited. Existing counseling services are often overwhelmed,
            stigmatized, or unavailable outside official hours. As a result,
            many students struggle in silence.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Solution</h2>
          <p className="text-gray-700 leading-relaxed">
            This app provides a private, always-available mental health companion
            that helps students reflect on their emotions, track their mood, and
            engage with an empathetic AI assistant. It acts as a supportive first
            layer, not a replacement for professional care.
          </p>
        </div>

       
        <div>
          <h2 className="text-xl font-semibold mb-3">Key Features</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>AI-powered chat companion with empathetic responses</li>
            <li>Daily mood check-ins with mood history tracking</li>
            <li>Private journaling system with guided prompts</li>
            <li>Secure user authentication using JWT</li>
            <li>Calm, student-friendly interface design</li>
          </ul>
        </div>

       
        <div>
          <h2 className="text-xl font-semibold mb-3">Technologies Used</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>React & Next.js</li>
            <li>Tailwind CSS</li>
            <li>Django & Django Rest Framework</li>
            <li>JWT Authentication</li>
            <li>Gemini API for AI responses</li>
            <li>Figma for UI/UX design</li>
          </ul>
        </div>

       
        <div>
          <h2 className="text-xl font-semibold mb-3">What I Learned</h2>
          <p className="text-gray-700 leading-relaxed">
            This project taught me how to design emotionally aware user
            experiences, structure secure backend systems, and integrate AI
            responsibly. I learned that building meaningful software requires
            understanding real human problems—not just writing clean code.
          </p>
        </div>

         
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black mb-10"
      >
        <ArrowLeft size={18} />
        <span>Return to Home</span>
      </Link>
      </section>
    </div>
  );
};

export default ProjectsPage;
