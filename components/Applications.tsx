import React from 'react';
import { APPLICATIONS_TEXT, APPLICATION_AREAS, ADVANTAGES_TEXT, ADVANTAGES_LIST } from '../constants';
import { CheckIcon } from './icons/CheckIcon';

const Applications: React.FC = () => {
  return (
    <section id="applications" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Where to Use Section */}
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-primary mb-6 relative">
              {APPLICATIONS_TEXT.title}
              <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-accent"></span>
            </h3>
            <p className="text-slate-600 mb-6">{APPLICATIONS_TEXT.content}</p>
            <ul className="space-y-3">
              {APPLICATION_AREAS.map((area, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-accent mr-3 mt-1"><CheckIcon /></span>
                  <span className="text-slate-700">{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Advantages Section */}
          <div className="mt-12 lg:mt-0">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl md:text-3xl font-extrabold text-primary mb-6 relative">
                {ADVANTAGES_TEXT.title}
                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-accent"></span>
                </h3>
                <ul className="space-y-3">
                {ADVANTAGES_LIST.map((advantage, index) => (
                    <li key={index} className="flex items-start">
                        <span className="text-accent mr-3 mt-1"><CheckIcon /></span>
                        <span className="text-slate-700">{advantage}</span>
                    </li>
                ))}
                </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Applications;
