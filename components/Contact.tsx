import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    direccion: '',
    asunto: '',
    mensaje: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
    setFormData({
      nombre: '',
      apellido: '',
      email: '',
      telefono: '',
      direccion: '',
      asunto: '',
      mensaje: ''
    });
  };

  return (
    <section id="contacto" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Info Column */}
          <div>
            <span className="text-amber-600 font-semibold tracking-wider uppercase text-sm">Contáctanos</span>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl mb-6">
              ¿Listo para iniciar tu proyecto?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Llena el formulario o llámanos para agendar una visita y consulta a domicilio. Estamos listos para escuchar tus ideas.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-500 text-white">
                    <MapPin className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-900">Ubicación</h3>
                  <p className="mt-1 text-slate-600">
                    Atmósfera 179, Col. El Caloso<br />
                    CP 48360, Puerto Vallarta, Jalisco, México
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-500 text-white">
                    <Phone className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-900">Teléfono</h3>
                  <p className="mt-1 text-slate-600">
                    <a href="tel:+523223045599" className="hover:text-amber-600 transition-colors">
                      +52 322 304 5599
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-500 text-white">
                    <Mail className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-900">Email</h3>
                  <p className="mt-1 text-slate-600">
                    <a href="mailto:saguarquitectura@hotmail.com" className="hover:text-amber-600 transition-colors">
                      saguarquitectura@hotmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-lg overflow-hidden shadow-lg h-64 w-full">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.376269984646!2d-105.234383!3d20.612151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8421456345634563%3A0x123456789abcdef!2sC.%20Atm%C3%B3sfera%20179%2C%20El%20Caloso%2C%2048360%20Puerto%20Vallarta%2C%20Jal.%2C%20Mexico!5e0!3m2!1sen!2smx!4v1620000000000!5m2!1sen!2smx" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Mapa de ubicación SAGU Arquitectura"
              ></iframe>
            </div>
          </div>

          {/* Form Column */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Envíanos un mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-slate-700">Nombre</label>
                  <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm bg-slate-50 border p-3"
                  />
                </div>
                <div>
                  <label htmlFor="apellido" className="block text-sm font-medium text-slate-700">Apellido</label>
                  <input
                    type="text"
                    name="apellido"
                    id="apellido"
                    required
                    value={formData.apellido}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm bg-slate-50 border p-3"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm bg-slate-50 border p-3"
                  />
                </div>
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-slate-700">Teléfono</label>
                  <input
                    type="tel"
                    name="telefono"
                    id="telefono"
                    required
                    value={formData.telefono}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm bg-slate-50 border p-3"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="direccion" className="block text-sm font-medium text-slate-700">Dirección del proyecto (Opcional)</label>
                <input
                  type="text"
                  name="direccion"
                  id="direccion"
                  value={formData.direccion}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm bg-slate-50 border p-3"
                />
              </div>

              <div>
                <label htmlFor="asunto" className="block text-sm font-medium text-slate-700">Asunto</label>
                <select
                  name="asunto"
                  id="asunto"
                  required
                  value={formData.asunto}
                  onChange={(e) => setFormData({ ...formData, asunto: e.target.value })}
                  className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm bg-slate-50 border p-3"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="Cotización">Solicitar Cotización</option>
                  <option value="Información">Información General</option>
                  <option value="Visita">Agendar Visita</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-slate-700">Mensaje</label>
                <textarea
                  name="mensaje"
                  id="mensaje"
                  rows={4}
                  required
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm bg-slate-50 border p-3"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-4 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 transition-colors"
              >
                <Send className="mr-2 h-5 w-5" />
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;