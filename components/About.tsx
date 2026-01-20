import React from 'react';

const About: React.FC = () => {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-10 lg:mb-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1631&q=80"
                alt="Equipo de Arquitectura"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-8">
                <p className="text-white font-medium text-lg">Compromiso en cada detalle</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-6">
              Nuestra Historia
            </h2>
            <div className="h-1 w-20 bg-amber-500 mb-8"></div>
            
            <div className="prose prose-lg text-slate-600">
              <p className="mb-6">
                En <strong>SAGU Arquitectura</strong>, nuestra historia comienza con la pasión y perseverancia de un equipo de profesionales que unieron sus talentos y experiencia para crear una firma de arquitectura comprometida con la excelencia, la calidad constructiva y la atención personalizada en cada proyecto.
              </p>
              <p className="mb-6">
                Nos especializamos en entender las necesidades únicas de cada cliente, transformando ideas en espacios funcionales y estéticamente impecables. Nuestro enfoque principal son las remodelaciones domésticas, ampliaciones y el diseño de interiores, donde cada rincón cuenta una historia.
              </p>
              <p>
                Más que construir, creamos relaciones de confianza a largo plazo, asegurando que tu inversión se traduzca en plusvalía y confort para ti y tu familia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;