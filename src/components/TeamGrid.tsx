
import React, { useEffect, useRef } from 'react';
import TeamMember, { TeamMemberProps } from './TeamMember';

const TeamGrid = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Team member data with updated roles and Instagram links
  const teamMembers: TeamMemberProps[] = [
    {
      name: "سجاد جهاد",
      role: "مهندس طكة عطية",
      description: "مهندس طكة عطية",
      imageUrl: "/lovable-uploads/44d39489-a54e-4a0b-89cc-53af0ae51305.png",
      socialLinks: [
        { type: 'instagram', url: 'https://www.instagram.com/' }
      ]
    },
    {
      name: "مقتدى ناهض",
      role: "تخدير",
      description: "تخدير",
      imageUrl: "/lovable-uploads/19a7147e-a5b6-402b-bb89-c747fc555d52.png",
      socialLinks: [
        { type: 'instagram', url: 'https://www.instagram.com/itz_mu4?igsh=MTljMXFqNXpxaDR6dw==' }
      ]
    },
    {
      name: "حسن عبد الكاظم",
      role: "أشعة وسونار",
      description: "أشعة وسونار",
      imageUrl: "/lovable-uploads/f88e9204-297f-4d93-a784-1238896d07b2.png",
      socialLinks: [
        { type: 'instagram', url: 'https://www.instagram.com/_7xd55?igsh=MXVpbDAyZXk4aDdqdg==' }
      ]
    },
    {
      name: "محمد توفيق",
      role: "أشعة وسونار",
      description: "أشعة وسونار",
      imageUrl: "/lovable-uploads/44874d7d-2685-4e67-862d-7977ba56ef11.png",
      socialLinks: [
        { type: 'instagram', url: 'https://www.instagram.com/ma._tw?igsh=N2JvdWplaHRiZjFz' }
      ]
    },
    {
      name: "مقتدى محمد",
      role: "طالب سادس بلكي ينجح السنة",
      description: "طالب سادس بلكي ينجح السنة",
      imageUrl: "/lovable-uploads/ed632593-f90d-4bb7-b48b-a9e479488a37.png",
      socialLinks: [
        { type: 'instagram', url: 'https://www.instagram.com/lil.n8?igsh=M2RiOXd4N3h5dTc4' }
      ]
    },
    {
      name: "مؤمل حمزه",
      role: "تخدير",
      description: "تخدير",
      imageUrl: "/lovable-uploads/9507a1eb-8b04-4b07-8cd5-fc4f3de85506.png",
      socialLinks: [
        { type: 'instagram', url: 'https://www.instagram.com/mo_.132?igsh=MWo0d29pcGlidHpycw==' }
      ]
    },
    {
      name: "حسين طه",
      role: "مثل مقتدى محمد",
      description: "مثل مقتدى محمد",
      imageUrl: "/lovable-uploads/cbfc6b60-a183-472b-abb7-882588d7fe9a.png",
      socialLinks: [
        { type: 'instagram', url: 'https://www.instagram.com/1huze?igsh=bDc5MnF6aW54cTZ2' }
      ]
    },
    {
      name: "سجاد وليد",
      role: "مهندس طكة عطية",
      description: "مهندس طكة عطية",
      imageUrl: "/lovable-uploads/a22c9dd3-e3fe-4336-bf69-393f064db01e.png",
      socialLinks: [
        { type: 'instagram', url: 'https://www.instagram.com/sajad.waleed_2?igsh=MnN0ZnJxYXQxMTd4' }
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
          <h2 className="text-4xl font-semibold mb-4 text-balance">فريقنا المتميز</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto text-balance">
            تعرف على الأفراد الموهوبين الذين يجلبون مهاراتهم ووجهات نظرهم الفريدة إلى مجموعتنا.
            معًا، نتجاوز الحدود ونخلق تجارب رائعة.
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
