import React from 'react';
import { CLIENTS } from '../constants';
import type { Client } from '../types';

const ClientLogo: React.FC<{ client: Client }> = ({ client }) => (
    <div className="flex justify-center items-center p-4">
        <img 
            src={client.logoUrl} 
            alt={client.name}
            className="max-h-16 w-auto object-contain transition-all duration-300 filter grayscale hover:grayscale-0"
            title={client.name}
        />
    </div>
);


const Clients: React.FC = () => {
  return (
    <section id="clientes" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">Algunos de Nuestros Clientes</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            La confianza de empresas líderes respalda la calidad de nuestro trabajo.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 items-center">
          {CLIENTS.map((client) => (
            <ClientLogo key={client.name} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
