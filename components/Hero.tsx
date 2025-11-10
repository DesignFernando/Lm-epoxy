import React from 'react';

const Hero: React.FC = () => {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = contactSection.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
  };

  return (
    <section 
      id="inicio" 
      className="h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1617082331611-7a505e3692a5?q=80&w=1920')" }}
    >
      <div className="bg-black bg-opacity-50 p-10 rounded-lg text-center mx-4">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4">LM EPOXY</h1>
        <p className="text-xl md:text-2xl mb-8">Soluciones Profesionales en Recubrimientos Epóxicos</p>
        <a 
          href="#contacto"
          onClick={handleScrollToContact}
          className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 duration-300 shadow-lg"
        >
          Contáctanos
        </a>
      </div>
    </section>
  );
};

export default Hero;