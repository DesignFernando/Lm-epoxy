import React from 'react';
import { SERVICES } from '../constants';
import type { Service } from '../types';
import { WrenchIcon } from './icons/WrenchIcon';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-all duration-300 ease-in-out transform hover:shadow-2xl hover:-translate-y-2">
    <div className="bg-primary text-white rounded-full p-4 mb-4">
      <WrenchIcon />
    </div>
    <h3 className="text-xl font-bold text-primary mb-2 uppercase">{service.name}</h3>
    <p className="text-slate-600">{service.description}</p>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ofrecemos una gama completa de soluciones en recubrimientos para satisfacer cualquier necesidad, garantizando calidad y durabilidad.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;