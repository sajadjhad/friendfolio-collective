
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subHeadingRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple animation sequence when component mounts
    const heading = headingRef.current;
    const subHeading = subHeadingRef.current;
    const button = buttonRef.current;

    if (heading) {
      heading.style.opacity = '0';
      heading.style.transform = 'translateY(20px)';
      setTimeout(() => {
        heading.style.opacity = '1';
        heading.style.transform = 'translateY(0)';
      }, 300);
    }

    if (subHeading) {
      subHeading.style.opacity = '0';
      subHeading.style.transform = 'translateY(20px)';
      setTimeout(() => {
        subHeading.style.opacity = '1';
        subHeading.style.transform = 'translateY(0)';
      }, 500);
    }

    if (button) {
      button.style.opacity = '0';
      button.style.transform = 'translateY(20px)';
      setTimeout(() => {
        button.style.opacity = '1';
        button.style.transform = 'translateY(0)';
      }, 700);
    }
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[30%] left-1/4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-[35%] right-1/4 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1 
          ref={headingRef}
          className="transition-all duration-700 ease-out text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6 text-balance"
        >
          Meet the team behind 
          <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-neutral-800 to-neutral-500">excellence & innovation</span>
        </h1>
        <p 
          ref={subHeadingRef}
          className="transition-all duration-700 ease-out text-lg md:text-xl max-w-2xl mx-auto mb-8 text-neutral-600 text-balance"
        >
          A collective of passionate professionals bringing their unique perspectives and expertise to create something extraordinary.
        </p>
        <div 
          ref={buttonRef}
          className="transition-all duration-700 ease-out"
        >
          <a 
            href="#team" 
            className="inline-flex items-center px-6 py-3 text-sm font-medium rounded-full bg-black text-white hover:bg-black/90 transition-all transform hover:scale-105 duration-300"
          >
            Meet our team
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-neutral-500 mb-2">Scroll to explore</span>
        <div className="w-5 h-10 border-2 border-neutral-300 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-neutral-400 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
