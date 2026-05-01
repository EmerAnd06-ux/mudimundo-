import { Link } from "react-router-dom";
// Importación de recursos
import gif1 from "../assets/senas/Gif1.gif";

export default function Inicio() {
  return (
    <div className="flex min-h-screen bg-[#D9D2CE]">
      
      {/* SIDEBAR - Mantenemos el ancho de 280px para consistencia */}
      <aside className="w-[280px] bg-[#EADFC9] p-8 flex flex-col justify-between shadow-md fixed h-full">
        <div className="flex flex-col gap-10">
          <h2 className="text-[22px] font-bold text-[#000] leading-tight">
            Aprendizaje de <br /> Lengua de Señas
          </h2>

          {/* MENÚ ORGANIZADO */}
          <nav className="flex flex-col gap-4 text-[18px]">
            <Link 
              to="/" 
              className="flex items-center gap-4 px-4 py-3 bg-[#F4EBD6] rounded-xl hover:bg-[#CFC7BD] transition-all font-medium"
            >
              <span className="text-[22px]">🏠</span> Inicio
            </Link>

            <Link 
              to="/alfabeto" 
              className="flex items-center gap-4 px-4 py-3 bg-[#F4EBD6] rounded-xl hover:bg-[#CFC7BD] transition-all font-medium"
            >
              <span className="text-[22px]">📘</span> Alfabeto
            </Link>

            <Link 
              to="/frases" 
              className="flex items-center gap-4 px-4 py-3 bg-[#F4EBD6] rounded-xl hover:bg-[#CFC7BD] transition-all font-medium"
            >
              <span className="text-[22px]">📚</span> Frases
            </Link>

            <Link 
              to="/taller" 
              className="flex items-center gap-4 px-4 py-3 bg-[#F4EBD6] rounded-xl hover:bg-[#CFC7BD] transition-all font-medium"
            >
              <span className="text-[22px]">🎓</span> Taller
            </Link>
          </nav>
        </div>

        {/* CONTENIDO INFERIOR SIDEBAR */}
        <div className="flex flex-col gap-6">
          <p className="text-[14px] text-gray-700 italic leading-relaxed">
            "El lenguaje de señas abre puertas a conexiones significativas y a una comunicación inclusiva."
          </p>
          <div className="bg-white/30 p-2 rounded-lg backdrop-blur-sm">
            <img src={gif1} alt="Mano saludando" className="w-full h-auto rounded-md" />
          </div>
        </div>
      </aside>

      {/* CONTENIDO PRINCIPAL - Añadimos margen izquierdo para no quedar bajo el sidebar fixed */}
      <main className="flex-1 ml-[280px] bg-white p-16">
        <div className="max-w-3xl mx-auto">
          <header className="text-center mb-14">
            <h1 className="text-4xl font-black text-[#222] mb-6">
              Bienvenido al Aprendizaje <br /> de Lengua de Señas
            </h1>
            <p className="text-gray-600 text-[18px] leading-relaxed">
              Embárcate en tu viaje para aprender lenguaje de señas. Nuestra plataforma
              interactiva hace que sea fácil y entretenido comunicarte con la comunidad.
            </p>
          </header>

          {/* TARJETAS DE ACCESO RÁPIDO */}
          <div className="flex flex-col gap-6">
            
            {/* CARD 1 */}
            <div className="flex items-center gap-6 bg-[#F8F8F8] border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-[#EADFC9] w-16 h-16 flex items-center justify-center rounded-full text-3xl">
                📘
              </div>
              <div>
                <h3 className="font-bold text-[20px] text-[#222]">Aprende el alfabeto</h3>
                <p className="text-gray-600 text-[15px] mt-1">
                  Domina los fundamentos del lenguaje de señas con nuestra guía completa del alfabeto.
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="flex items-center gap-6 bg-[#F8F8F8] border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-[#EADFC9] w-16 h-16 flex items-center justify-center rounded-full text-3xl">
                📝
              </div>
              <div>
                <h3 className="font-bold text-[20px] text-[#222]">Frases Básicas</h3>
                <p className="text-gray-600 text-[15px] mt-1">
                  Amplía tu vocabulario con frases esenciales para la comunicación diaria.
                </p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="flex items-center gap-6 bg-[#F8F8F8] border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-[#EADFC9] w-16 h-16 flex items-center justify-center rounded-full text-3xl">
                🧩
              </div>
              <div>
                <h3 className="font-bold text-[20px] text-[#222]">Taller de Práctica</h3>
                <p className="text-gray-600 text-[15px] mt-1">
                  Pon a prueba tus conocimientos y mejora tus habilidades con ejercicios interactivos.
                </p>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}