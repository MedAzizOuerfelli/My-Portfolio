import React from 'react';
import SocialLinks from './SocialLinks';

const Footer = () => {
  const techStack = [
    'React',
    'Three.js',
    'Tailwind CSS',
    'Vite',
    'Framer Motion',
  ];

  return (
    <footer className="bg-primary py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <SocialLinks />

          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-tertiary rounded-full text-sm text-white"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-secondary">
            <p>© {new Date().getFullYear()} Mohamed Aziz Ouerfelli. All rights reserved.</p>
            <p className="mt-2 text-sm">
              Built with ❤️ using modern web technologies
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 