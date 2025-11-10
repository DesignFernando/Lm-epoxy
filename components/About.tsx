import React from 'react';
import { ABOUT_TEXT } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 w-full">
            <img 
              src="https://images.unsplash.com/photo-1598223619042-0d178cb7b6f5?q=80&w=1920" 
              alt="Piso epóxico azul brillante en una fábrica"
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>
          <div className="lg:w-1/2 w-full">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6 relative inline-block">
              {ABOUT_TEXT.title}
              <span className="absolute -bottom-2 left-0 w-2/3 h-1 bg-accent"></span>
            </h2>
            <p className="text-lg text-slate-600 mb-4 leading-relaxed">
              {ABOUT_TEXT.content}
            </p>
            <p className="text-lg text-slate-800 font-semibold leading-relaxed">
              {ABOUT_TEXT.highlight}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;