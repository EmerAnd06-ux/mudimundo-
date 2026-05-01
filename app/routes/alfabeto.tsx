import { useState } from "react";
import { Link } from "react-router-dom";

// Usamos la importación dinámica que ya manejas en el taller para no escribir 27 líneas de import
const imagenesContext = import.meta.glob("../assets/senas/letras/*.{jpeg,png,gif}", { eager: true });

const imagenes = Object.keys(imagenesContext).reduce((acc, path) => {
  const nombre = path.split("/").pop()?.split(".")[0] || "";
  acc[nombre] = (imagenesContext[path] as any).default;
  return acc;
}, {} as Record<string, string>);

const letras = Object.keys(imagenes).sort();

export default function Alfabeto() {
  const [imagenSeleccionada, setImagenSeleccionada] = useState<string | null>(null);

  return (
    <div className="flex min-h-screen bg-[#D9D2CE]">
      
      {/* SIDEBAR UNIFICADO */}
      <aside className="w-[280px] bg-[#EADFC9] p-8 flex flex-col justify-between fixed left-0 top-0 h-screen shadow-md">
        <div className="flex flex-col gap-10">
          <h2 className="text-[20px] font-bold text-[#000] leading-tight">
            Aprendizaje de <br /> Lengua de Señas
          </h2>

          <nav className="flex flex-col gap-4 text-[18px]">
            <Link to="/" className="flex items-center gap-4 px-4 py-3 bg-[#F4EBD6] rounded-xl hover:bg-[#CFC7BD] transition-all">
              🏠 Inicio
            </Link>
            <Link to="/alfabeto" className="flex items-center gap-4 px-4 py-3 bg-[#CFC7BD] rounded-xl font-bold">
              📘 Alfabeto
            </Link>
            <Link to="/frases" className="flex items-center gap-4 px-4 py-3 bg-[#F4EBD6] rounded-xl hover:bg-[#CFC7BD] transition-all">
              📚 Frases
            </Link>
            <Link to="/taller" className="flex items-center gap-4 px-4 py-3 bg-[#F4EBD6] rounded-xl hover:bg-[#CFC7BD] transition-all">
              🎓 Taller
            </Link>
          </nav>
        </div>
        
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 bg-white/50 rounded-full flex items-center justify-center text-2xl border border-white/40">👤</div>
          <p className="text-sm font-bold text-gray-700">ManosLuAn</p>
        </div>
      </aside>

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1 ml-[280px] p-16 bg-white">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-black text-[#222] mb-4">Alfabeto de Lengua de Señas</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Haz clic en cada tarjeta para ampliar la imagen y estudiar el movimiento de la mano.
          </p>
        </header>

        {/* GRID DE LETRAS */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {letras.map((letra) => (
            <div
              key={letra}
              onClick={() => setImagenSeleccionada(letra)}
              className="group bg-[#F8F8F8] p-4 rounded-2xl border border-gray-100 cursor-pointer hover:bg-[#EADFC9] hover:border-[#CFC7BD] hover:shadow-md transition-all duration-300 text-center"
            >
              <span className="text-xl font-black text-gray-400 group-hover:text-[#000] transition-colors">{letra}</span>
              <img
                src={imagenes[letra]}
                alt={`Letra ${letra}`}
                className="w-full h-32 object-contain mt-2 group-hover:scale-110 transition-transform"
              />
            </div>
          ))}
        </div>
      </main>

      {/* MODAL PARA VER GRANDE */}
      {imagenSeleccionada && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-6"
          onClick={() => setImagenSeleccionada(null)}
        >
          <div
            className="bg-white p-8 rounded-3xl shadow-2xl max-w-md w-full relative animate-in fade-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
               onClick={() => setImagenSeleccionada(null)}
               className="absolute top-4 right-4 text-gray-400 hover:text-black text-2xl"
            >✕</button>
            <h2 className="text-center text-3xl font-black mb-6">Letra {imagenSeleccionada}</h2>
            <div className="bg-[#f9f9f9] rounded-2xl p-4 border border-gray-100">
              <img
                src={imagenes[imagenSeleccionada]}
                alt={imagenSeleccionada}
                className="w-full h-80 object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}