
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TeamGrid from '../components/TeamGrid';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scroll implementation for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.pageYOffset,
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Add animation class to visible elements on initial load
    setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
            }
          });
        },
        { threshold: 0.1 }
      );

      const fadeElements = document.querySelectorAll('.fade-in-section');
      fadeElements.forEach((el) => observer.observe(el));

      return () => {
        fadeElements.forEach((el) => observer.unobserve(el));
      };
    }, 100);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TeamGrid />
      
      {/* About Section */}
      <section id="about" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-section">
              <h2 className="text-4xl font-semibold mb-6 text-balance">Our Collaborative Philosophy</h2>
              <p className="text-neutral-600 mb-6 text-balance">
                We believe in the power of diverse perspectives, open collaboration, and continuous innovation. Our team brings together experts from various disciplines, united by a shared vision to create meaningful impact through our work.
              </p>
              <p className="text-neutral-600 mb-6 text-balance">
                Each member of our collective contributes their unique talents and experiences, enabling us to tackle complex challenges with creativity and precision. Together, we're building solutions that are thoughtful, forward-thinking, and human-centered.
              </p>
            </div>
            
            <div className="fade-in-section relative aspect-video overflow-hidden rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Team collaboration" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Quote Section */}
      <section className="py-24 px-4 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto text-center fade-in-section">
          <svg className="w-12 h-12 mx-auto mb-6 text-neutral-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-2xl md:text-3xl font-light mb-8 text-balance leading-relaxed">
            Design is not just what it looks like and feels like. Design is how it works.
          </p>
          <cite className="text-neutral-400 not-italic">— Steve Jobs</cite>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
