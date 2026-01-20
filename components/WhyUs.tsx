import React from 'react';
import { CheckCircle2, DollarSign, HeartHandshake, Award } from 'lucide-react';

const WhyUs: React.FC = () => {
  const features = [
    {
      icon: DollarSign,
      title: "Presupuesto sin costo",
      description: "Evaluamos tu proyecto y te brindamos una cotización detallada sin compromiso alguno."
    },
    {
      icon: Award,
      title: "Compromiso en cada proyecto",
      description: "Nos involucramos al 100% en cada obra, supervisando calidad y tiempos de entrega."
    },
    {
      icon: HeartHandshake,
      title: "Atención personalizada",
      description: "Trato directo y cercano. Escuchamos tus ideas para materializarlas tal como las imaginas."
    },
    {
      icon: CheckCircle2,
      title: "Experiencia residencial",
      description: "Amplia trayectoria en remodelaciones y construcciones en la zona de Puerto Vallarta."
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl">
            ¿Por qué elegir a SAGU Arquitectura?
          </h2>
          <p className="mt-4 text-slate-300 text-lg">
            Tu tranquilidad y satisfacción son nuestra prioridad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-amber-500 transition-colors duration-300">
              <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center mb-4 text-amber-500">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;