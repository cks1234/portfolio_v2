import React from 'react';

export default function HomeCard() {
  return (
    <div className="fixed inset-0 w-full h-full">
      {/* Background Image Container */}
      <div className="absolute inset-0">
        <img
          src="/home_pic.jpg"
          alt="Profile Background"
          className="w-full h-full object-cover blur-sm"
        />
      </div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
        <div className="w-full max-w-md mx-auto text-center space-y-6">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            Hi, I'm Sam
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-mono text-white">
            A Software Engineer
          </p>
          
          
          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a 
              href="/projects" 
              className="button text-white text-xl font-bold"
            >
              View Projects
            </a>
            <a 
              href="/contact" 
              className="button text-white text-xl font-bold"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}