'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useScrollReveal } from './useScrollReveal';

const images = [
  '/aboutHeadshot2024.jpg',
  '/aboutPresentationECS.jpg',
  '/aboutCommencement.jpg',
  '/aboutNickPic.jpg',
  '/aboutWaterboarding.jpg',
  '/aboutPresentation.jpg',
];

const tabData = [
  {
    id: 'engineer',
    label: 'Engineer',
    title: 'Software Engineer',
    content: 'I design and build systems with a focus on AI, automation, and backend development. My projects include signal classification, workflow automation with n8n, and cloud deployments on AWS.',
    icon: '💻'
  },
  {
    id: 'builder',
    label: 'Builder',
    title: 'Problem Solver',
    content: 'I enjoy turning ideas into working solutions. Examples include developing machine learning models, creating custom APIs, and optimizing algorithms for performance and scalability.',
    icon: '⚙️'
  },
  {
    id: 'learner',
    label: 'Learner',
    title: 'Continuous Learner',
    content: 'I push myself to stay current with new technologies through certifications, side projects, and consistent practice in data structures and algorithms.',
    icon: '📖'
  },
  {
    id: 'fitness',
    label: 'Fitness',
    title: 'Health and Discipline',
    content: 'Outside of technology, I practice weightlifting and endurance training. Fitness builds the discipline and focus that I carry into my work.',
    icon: '🏋️'
  }
];


export default function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('enthusiast');
  const aboutRef = useScrollReveal();

  const changeImage = (direction: number) => {
    setCurrentImageIndex((prev) => {
      const newIndex = prev + direction;
      if (newIndex >= images.length) return 0;
      if (newIndex < 0) return images.length - 1;
      return newIndex;
    });
  };

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
  };

  const activeTabData = tabData.find(tab => tab.id === activeTab) || tabData[0];
  const imagePositions: Record<number, string> = {
    3: 'object-[center_20%]', // Nick pic nudged up
  };


  return (
    <section 
      ref={aboutRef}
      id="about" 
      className="py-24 about-gradient mesh-overlay bg-depth relative reveal"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            About Me
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
            I'm Nick, a passionate New Grad Computer Science student from Cal State University Fullerton. 
            My journey in tech began at age 12, and ever since, I've been on a mission to turn curiosity into expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Gallery */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-white/10">
            {images.map((src, index) => (
              <Image
                key={src}
                src={src}
                alt={`About Nick - Image ${index + 1}`}
                fill
                priority
                className={`object-cover ${imagePositions[index] || 'object-center'} ${
                  index === currentImageIndex ? 'block' : 'hidden'
                }`}
              />
            ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => changeImage(-1)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 text-gray-800 rounded-full p-3 hover:bg-white transition-all duration-200 shadow-lg hover:scale-110"
              aria-label="Previous image"
            >
              ❮
            </button>
            <button
              onClick={() => changeImage(1)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 text-gray-800 rounded-full p-3 hover:bg-white transition-all duration-200 shadow-lg hover:scale-110"
              aria-label="Next image"
            >
              ❯
            </button>

            {/* Instagram-style Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentImageIndex
                      ? 'bg-white scale-125'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Tabbed Content */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white mb-8 tracking-tight">
              Here's what I'm all about:
            </h3>
            
            {/* Tab Navigation */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {tabData.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`p-4 rounded-xl text-left transition-all duration-300 hover-lift ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-white/10 text-gray-200 hover:bg-white/20 backdrop-blur-sm border border-white/10'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{tab.icon}</span>
                    <span className="font-medium">{tab.label}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover-lift">
              <h4 className="text-2xl font-bold text-white mb-4 flex items-center space-x-3">
                <span className="text-3xl">{activeTabData.icon}</span>
                <span>{activeTabData.title}</span>
              </h4>
              <p className="text-gray-200 text-lg leading-relaxed font-normal">
                {activeTabData.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
