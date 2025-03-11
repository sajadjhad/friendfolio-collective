
import React, { useEffect, useRef } from 'react';
import TeamMember, { TeamMemberProps } from './TeamMember';

const TeamGrid = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Team member data
  const teamMembers: TeamMemberProps[] = [
    {
      name: "Alex Chen",
      role: "Product Designer",
      description: "A visionary designer with a passion for creating intuitive, user-centered experiences that bridge the gap between form and function.",
      imageUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      socialLinks: [
        { type: 'github', url: 'https://github.com' },
        { type: 'twitter', url: 'https://twitter.com' },
        { type: 'website', url: 'https://example.com' }
      ]
    },
    {
      name: "Maya Johnson",
      role: "Lead Developer",
      description: "Full-stack developer with expertise in building scalable applications. Passionate about clean code and innovative solutions.",
      imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      socialLinks: [
        { type: 'github', url: 'https://github.com' },
        { type: 'twitter', url: 'https://twitter.com' }
      ]
    },
    {
      name: "David Kim",
      role: "UX Researcher",
      description: "Human-centered design advocate with a background in cognitive psychology. Dedicated to creating meaningful user experiences based on real insights.",
      imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      socialLinks: [
        { type: 'website', url: 'https://example.com' },
        { type: 'twitter', url: 'https://twitter.com' }
      ]
    },
    {
      name: "Sarah Martinez",
      role: "Creative Director",
      description: "Award-winning creative director with 10+ years of experience. Expert in brand identity, visual design, and creative strategy.",
      imageUrl: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      socialLinks: [
        { type: 'website', url: 'https://example.com' },
        { type: 'twitter', url: 'https://twitter.com' }
      ]
    },
    {
      name: "James Wilson",
      role: "Backend Engineer",
      description: "Systems architect specializing in high-performance, scalable infrastructure. Passionate about optimization and elegant solutions to complex problems.",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      socialLinks: [
        { type: 'github', url: 'https://github.com' },
        { type: 'website', url: 'https://example.com' }
      ]
    },
    {
      name: "Aisha Patel",
      role: "Frontend Developer",
      description: "Crafting beautiful, responsive interfaces with a focus on accessibility and performance. Dedicated to creating web experiences that delight users.",
      imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      socialLinks: [
        { type: 'github', url: 'https://github.com' },
        { type: 'twitter', url: 'https://twitter.com' }
      ]
    },
    {
      name: "Michael Thompson",
      role: "Marketing Strategist",
      description: "Data-driven marketer with a background in psychology. Specializes in growth strategies, brand positioning, and market analysis.",
      imageUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      socialLinks: [
        { type: 'twitter', url: 'https://twitter.com' },
        { type: 'website', url: 'https://example.com' }
      ]
    },
    {
      name: "Emily Nakamura",
      role: "Content Strategist",
      description: "Storyteller and content expert with a knack for translating complex ideas into compelling narratives. Passionate about voice, tone, and effective communication.",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      socialLinks: [
        { type: 'twitter', url: 'https://twitter.com' },
        { type: 'website', url: 'https://example.com' }
      ]
    }
  ];

  useEffect(() => {
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
  }, []);

  return (
    <section id="team" ref={sectionRef} className="py-24 px-4 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-4xl font-semibold mb-4 text-balance">Our Exceptional Team</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto text-balance">
            Meet the talented individuals who bring their unique skills and perspectives to our collective.
            Together, we're pushing boundaries and creating remarkable experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="fade-in-section" 
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <TeamMember {...member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamGrid;
