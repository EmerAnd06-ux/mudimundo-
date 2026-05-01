export const loader = () => null;

import { Link } from "react-router";

/* IMÁGENES - Rutas originales según tu estructura */
import aburrido from "../assets/senas/aburrido.jpeg";
import ayer from "../assets/senas/ayer.jpeg";
import bebe from "../assets/senas/bebe.jpeg";
import como_esta from "../assets/senas/como_esta.jpeg";
import como from "../assets/senas/como.jpeg";
import cuando from "../assets/senas/cuando.jpeg";
import cual from "../assets/senas/cual.jpeg";
import donde_vives from "../assets/senas/donde_vives.jpeg";
import dormir from "../assets/senas/dormir.jpeg";
import familia from "../assets/senas/familia.jpeg";
import hijo from "../assets/senas/hijo.jpeg";
import hombre from "../assets/senas/hombre.jpeg";
import mama from "../assets/senas/mama.jpeg";
import mujer from "../assets/senas/mujer.jpeg";
import nino from "../assets/senas/nino.jpeg";
import papa from "../assets/senas/papa.jpeg";
import por_que from "../assets/senas/por_que.jpeg";
import preguntame from "../assets/senas/preguntame.jpeg";
import que_paso from "../assets/senas/que_paso.jpeg";
import que from "../assets/senas/que.jpeg";
import quien from "../assets/senas/quien.jpeg";
import tia from "../assets/senas/tia.jpeg";
import buenos_dias_tardes_noches from "../assets/senas/buenos_dias_tardes_noches.jpeg";

const frasesData = [
  { nombre: "Aburrido", img: aburrido },
  { nombre: "Ayer", img: ayer },
  { nombre: "Bebé", img: bebe },
  { nombre: "¿Cómo está?", img: como_esta },
  { nombre: "Como", img: como },
  { nombre: "¿Cuándo?", img: cuando },
  { nombre: "¿Cuál?", img: cual },
  { nombre: "¿Dónde vives?", img: donde_vives },
  { nombre: "Dormir", img: dormir },
  { nombre: "Familia", img: familia },
  { nombre: "Hijo", img: hijo },
  { nombre: "Hombre", img: hombre },
  { nombre: "Mamá", img: mama },
  { nombre: "Mujer", img: mujer },
  { nombre: "Niño", img: nino },
  { nombre: "Papá", img: papa },
  { nombre: "¿Por qué?", img: por_que },
  { nombre: "Pregúntame", img: preguntame },
  { nombre: "¿Qué pasó?", img: que_paso },
  { nombre: "Qué", img: que },
  { nombre: "Quién", img: quien },
  { nombre: "Tía", img: tia },
  { nombre: "Saludos", img: buenos_dias_tardes_noches },
];

export default function Frases() {
  return (
    <div className="flex h-screen bg-[#D9D2CE] overflow-hidden">
      
      {/* SIDEBAR - Estático al 20% aprox (280px) */}
      <aside className="w-[280px] bg-[#EADFC9] p-8 flex flex-col gap-10 shadow-md h-full">
        <h2 className="text-[20px] font-semibold text-[#000] leading-tight">
          Aprendizaje de <br /> Lengua de Señas
        </h2>

        <nav className="flex flex-col gap-4 text-[18px]">
          <Link to="/" className="flex items-center gap-4 px-4 py-3 bg-[#F4EBD6] rounded-md hover:bg-[#e2d7c0] transition">
            <span className="text-[22px]">🏠</span> Inicio
          </Link>
          <Link to="/alfabeto" className="flex items-center gap-4 px-4 py-3 bg-[#F4EBD6] rounded-md hover:bg-[#e2d7c0] transition">
            <span className="text-[22px]">📘</span> Alfabeto
          </Link>
          <Link to="/frases" className="flex items-center gap-4 px-4 py-3 bg-[#CFC7BD] rounded-md font-bold">
            <span className="text-[22px]">📚</span> Frases
          </Link>
          <Link to="/taller" className="flex items-center gap-4 px-4 py-3 bg-[#F4EBD6] rounded-md hover:bg-[#e2d7c0] transition">
            <span className="text-[22px]">🎓</span> Taller
          </Link>
        </nav>

        <p className="text-[15px] text-gray-700 mt-auto">
          El lenguaje de señas abre puertas a una comunicación inclusiva.
        </p>
      </aside>

      {/* CONTENIDO PRINCIPAL - Scroll independiente */}
      <section className="flex-1 bg-white p-12 overflow-y-auto">
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-[#222]">Diccionario de Frases</h1>
          <div className="h-1 w-20 bg-[#EADFC9] mt-2"></div>
        </header>

        {/* GRID DE IMÁGENES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {frasesData.map((item, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-square w-full bg-[#fcfcfc] rounded-xl overflow-hidden mb-3">
                <img
                  src={item.img}
                  className="w-full h-full object-contain"
                  alt={item.nombre}
                />
              </div>
              <h3 className="text-center font-bold text-gray-700 text-lg uppercase tracking-tight">
                {item.nombre}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}