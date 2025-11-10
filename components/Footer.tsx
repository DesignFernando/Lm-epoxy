
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-6 py-8 text-center">
        <p>&copy; {new Date().getFullYear()} LM EPOXY. Todos los derechos reservados.</p>
        <p className="text-sm text-blue-200 mt-2">Soluciones Profesionales en Recubrimientos Epóxicos</p>
      </div>
    </footer>
  );
};

export default Footer;
