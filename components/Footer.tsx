import React from 'react';
import { HardHat, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <HardHat className="h-6 w-6 text-amber-500" />
              <span className="font-bold text-xl text-white">SAGU</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Comprometidos con la excelencia y la calidad en cada proyecto de arquitectura y construcción en Puerto Vallarta.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="hover:text-amber-500 transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-amber-500 transition-colors">Servicios</a></li>
              <li><a href="#proyectos" className="hover:text-amber-500 transition-colors">Proyectos</a></li>
              <li><a href="#contacto" className="hover:text-amber-500 transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li>Atmósfera 179, Col. El Caloso</li>
              <li>Puerto Vallarta, Jalisco, CP 48360</li>
              <li><a href="tel:+523223045599" className="hover:text-amber-500">+52 322 304 5599</a></li>
              <li><a href="mailto:saguarquitectura@hotmail.com" className="hover:text-amber-500">saguarquitectura@hotmail.com</a></li>
            </ul>
            <div className="mt-4">
               <a href="https://www.facebook.com/SaguArquitectura" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition-colors">
                 <Facebook className="h-6 w-6" />
               </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} SAGU Arquitectura e Ingeniería. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;