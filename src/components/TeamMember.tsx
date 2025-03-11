
import React, { useRef, useState } from 'react';
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Instagram } from "lucide-react";

interface SocialLink {
  type: 'instagram';
  url: string;
}

export interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
  socialLinks?: SocialLink[];
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  description,
  imageUrl,
  socialLinks = []
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const getSocialIcon = (type: string) => {
    return <Instagram className="w-4 h-4" />;
  };

  return (
    <Card
      ref={cardRef}
      className={cn(
        "relative overflow-hidden rounded-2xl transition-all duration-500 bg-white card-hover",
        "border border-neutral-100 hover:border-neutral-200",
        "shadow-sm hover:shadow-md"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className={cn(
            "w-full h-full object-cover transition-all duration-700",
            isHovered ? "scale-105 filter saturate-100" : "scale-100 filter saturate-95"
          )}
        />
      </div>
      
      <div className="p-6">
        <div className="inline-block px-3 py-1 mb-3 text-xs font-medium bg-neutral-100 rounded-full">
          {role}
        </div>
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-neutral-600 text-sm mb-4 line-clamp-3">{description}</p>
        
        {socialLinks.length > 0 && (
          <div className="flex space-x-3">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-neutral-600 hover:text-black hover:bg-neutral-100 rounded-full transition-colors"
                aria-label={`Instagram link`}
              >
                {getSocialIcon(link.type)}
              </a>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};

export default TeamMember;
