import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative bg-slate-900 pt-16 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Arquitectura Moderna"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="lg:w-2/3">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl mb-6">
            Expertos en Arquitectura, <br className="hidden md:block" />
            <span className="text-amber-500">Remodelación y Construcción</span>
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-slate-300 mb-10 mx-auto sm:mx-0">
            Calidad constructiva y atención personalizada. Transformamos espacios y creamos hogares ideales con la confianza y experiencia que buscas en Puerto Vallarta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-slate-900 bg-amber-500 hover:bg-amber-400 md:text-lg transition-colors"
            >
              Platícanos tu proyecto
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="https://wa.me/5213223045599"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 md:text-lg transition-colors"
            >
              Consulta sin costo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;