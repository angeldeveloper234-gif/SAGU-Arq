import React from 'react';

const Projects: React.FC = () => {
  // URLs provided strictly in the requirements
  const projectImage1 = "https://scontent.faep39-1.fna.fbcdn.net/v/t39.30808-6/536268147_1371378991663321_5659445152745133908_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeH5vwBeNX9Ybx1e7_IYC8mFyg5EbkSQhfPKDkRuRJCF88PP3_nX0fryJWQKWMpS5sjUcOqRBOk5ZxLWHEbvxRXj&_nc_ohc=udX1MKXhxiUQ7kNvwH8yuV6&_nc_oc=Adnj5OdYWDv0S0rU_doKxelqJioQzO9JWR0cG2D0pusfcGnhp8ygcc7hxuuo00EsH9w&_nc_zt=23&_nc_ht=scontent.faep39-1.fna&_nc_gid=p-pBWVjtGpITG5xjEshlVA&oh=00_Afru9esTCLpRPZF9Pzt4MNEPJoYC3qtfG55HloVpLWu34A&oe=6975A0BE";
  
  const projectImage2 = "https://scontent.faep39-1.fna.fbcdn.net/v/t39.30808-6/535958664_1371379094996644_3664761602781040079_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFGK77xQzxNcLiovbj80g29BK9FX2eqs4sEr0VfZ6qzi9H2QlEtyErLDa9VawROwxzF-gC1KAPsPwG9xj8WuWKZ&_nc_ohc=7-4yNiP5HnoQ7kNvwG8wcL9&_nc_oc=AdkZiZ1DsENH_pP4EC2WHPdwLjE4jGX5wN_-5zTGdth6XdEKORY8_1ViW9u-DIFyYFc&_nc_zt=23&_nc_ht=scontent.faep39-1.fna&_nc_gid=yNJTYnXBzFPTUAo2Vgt6xg&oh=00_Afp_wzsFbJMK2fHdQHWfpPhIf0eYlbLBCBa3DEBBBD8caQ&oe=6975CF35";

  return (
    <section id="proyectos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Trabajos Realizados
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500">
            Una muestra de nuestra dedicación y calidad en obra.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Proyecto 1 */}
          <div className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer">
            <div className="aspect-w-16 aspect-h-12 bg-slate-200">
              <img
                src={projectImage1}
                alt="Proyecto de construcción SAGU - Obra residencial"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-white text-xl font-bold">Residencial & Acabados</h3>
              <p className="text-slate-200 text-sm mt-2">Detalle de calidad en construcción</p>
            </div>
          </div>

          {/* Proyecto 2 */}
          <div className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer">
            <div className="aspect-w-16 aspect-h-12 bg-slate-200">
              <img
                src={projectImage2}
                alt="Proyecto de remodelación SAGU - Interior"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-white text-xl font-bold">Remodelación Interior</h3>
              <p className="text-slate-200 text-sm mt-2">Transformación de espacios</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a
            href="https://www.facebook.com/SaguArquitectura"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700"
          >
            Ver más proyectos en Facebook
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;