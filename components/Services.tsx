import React from 'react';
import { Home, Hammer, Ruler, Layers, Bath, Armchair } from 'lucide-react';

interface ServiceItemProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300 group">
    <div className="w-14 h-14 bg-slate-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors duration-300">
      <Icon className="h-7 w-7 text-slate-700 group-hover:text-white transition-colors duration-300" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      icon: Home,
      title: "Ampliación y remodelación de casas",
      description: "Transformamos tu vivienda actual para adaptarla a nuevas necesidades, maximizando el espacio y mejorando su funcionalidad y valor estético."
    },
    {
      icon: Hammer,
      title: "Remodelaciones y renovaciones domésticas",
      description: "Servicio integral para renovar cualquier área de tu hogar. Desde pequeños cambios hasta renovaciones completas con acabados de primera calidad."
    },
    {
      icon: Layers,
      title: "Instalación de pisos",
      description: "Instalación profesional de todo tipo de recubrimientos y pisos: cerámicos, porcelanatos, laminados y más, garantizando durabilidad y belleza."
    },
    {
      icon: Ruler,
      title: "Trabajos de carpintería",
      description: "Diseño y fabricación de carpintería a medida. Puertas, closets, cocinas y mobiliario fijo que se integra perfectamente a tu arquitectura."
    },
    {
      icon: Bath,
      title: "Baños",
      description: "Diseño y remodelación especializada de baños. Creamos espacios de relajación modernos, funcionales y con las mejores instalaciones hidrosanitarias."
    },
    {
      icon: Armchair,
      title: "Interiores",
      description: "Propuestas de diseño interior que armonizan colores, texturas e iluminación para crear ambientes acogedores y llenos de personalidad."
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-semibold tracking-wider uppercase text-sm">Nuestros Servicios</span>
          <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Soluciones Integrales para tu Hogar
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            Ofrecemos un abanico completo de servicios profesionales para llevar tu proyecto desde la idea inicial hasta la entrega final.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceItem key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;