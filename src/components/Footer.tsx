
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-white py-16 px-4 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Collective</h3>
            <p className="text-neutral-600 text-sm max-w-xs">
              A team of talented individuals working together to create meaningful experiences and innovative solutions.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-medium uppercase tracking-wider text-neutral-500">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-600 hover:text-black transition-colors">Home</a></li>
              <li><a href="#team" className="text-neutral-600 hover:text-black transition-colors">Team</a></li>
              <li><a href="#about" className="text-neutral-600 hover:text-black transition-colors">About</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-medium uppercase tracking-wider text-neutral-500">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-600 hover:text-black transition-colors">Twitter</a></li>
              <li><a href="#" className="text-neutral-600 hover:text-black transition-colors">GitHub</a></li>
              <li><a href="#" className="text-neutral-600 hover:text-black transition-colors">LinkedIn</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-medium uppercase tracking-wider text-neutral-500">Contact</h4>
            <p className="text-neutral-600">hello@collective.example</p>
            <p className="text-neutral-600">+1 (555) 123-4567</p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-sm">
            © {currentYear} Collective. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-neutral-400 hover:text-black transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-neutral-400 hover:text-black transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
