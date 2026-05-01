import { useState, useMemo, useEffect } from "react";
import { NavLink } from "react-router-dom";

// 1. CARGA DINÁMICA DE AMBAS CARPETAS (Acepta cualquier extensión)
const letrasContext = import.meta.glob("../assets/senas/letras/*.{jpeg,png,jpg,gif,JPEG,PNG,JPG,GIF}", { eager: true });
const frasesContext = import.meta.glob("../assets/senas/frases/*.{jpeg,png,jpg,gif,JPEG,PNG,JPG,GIF}", { eager: true });

const items = [
  ...Object.keys(letrasContext).map((path) => ({
    tipo: "letra",
    nombre: path.split("/").pop()?.split(".")[0].replace(/_/g, " ") || "",
    src: (letrasContext[path] as any).default,
  })),
  ...Object.keys(frasesContext).map((path) => ({
    tipo: "frase",
    nombre: path.split("/").pop()?.split(".")[0].replace(/_/g, " ") || "",
    src: (frasesContext[path] as any).default,
  })),
];

export default function Taller() {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState<string | null>(null);
  const [puntaje, setPuntaje] = useState(0);

  useEffect(() => {
    console.log(`Cargados: ${items.length} items totales.`);
  }, []);

  const preguntas = useMemo(() => {
    if (items.length === 0) return [];
    return items.map((item) => {
      const opciones = [item.nombre.toUpperCase()];
      while (opciones.length < 4) {
        const random = items[Math.floor(Math.random() * items.length)].nombre.toUpperCase();
        if (!opciones.includes(random)) opciones.push(random);
      }
      return {
        tipo: item.tipo,
        imagen: item.src,
        correcta: item.nombre.toUpperCase(),
        opciones: opciones.sort(() => Math.random() - 0.5),
      };
    }).sort(() => Math.random() - 0.5);
  }, []);

  const pregunta = preguntas[preguntaActual];

  const manejarRespuesta = (opcion: string) => {
    if (respuestaSeleccionada) return;
    setRespuestaSeleccionada(opcion);
    if (opcion === pregunta.correcta) setPuntaje(prev => prev + 1);

    setTimeout(() => {
      setRespuestaSeleccionada(null);
      setPreguntaActual(prev => prev + 1);
    }, 1200);
  };

  if (items.length === 0) {
    return <div className="flex h-screen items-center justify-center bg-[#D9D2CE]">Cargando señas...</div>;
  }

  return (
    <div className="flex min-h-screen bg-[#D9D2CE] text-[#333]">
      
      {/* SIDEBAR */}
      <aside className="w-[280px] bg-[#EADFC9] p-8 flex flex-col justify-between fixed left-0 top-0 h-screen shadow-md">
        <div className="flex flex-col gap-10">
          <h2 className="text-[20px] font-bold text-[#000] leading-tight">
            Aprendizaje de <br /> Lengua de Señas
          </h2>
          <nav className="flex flex-col gap-4 text-[18px]">
            <NavLink to="/" className="flex items-center gap-4 px-4 py-3 bg-[#F4EBD6] rounded-xl hover:bg-[#CFC7BD] transition-all">🏠 Inicio</NavLink>
            <NavLink to="/alfabeto" className="flex items-center gap-4 px-4 py-3 bg-[#F4EBD6] rounded-xl hover:bg-[#CFC7BD] transition-all">📘 Alfabeto</NavLink>
            <NavLink to="/frases" className="flex items-center gap-4 px-4 py-3 bg-[#F4EBD6] rounded-xl hover:bg-[#CFC7BD] transition-all">📚 Frases</NavLink>
            <NavLink to="/taller" className="flex items-center gap-4 px-4 py-3 bg-[#CFC7BD] rounded-xl font-bold">🎓 Taller</NavLink>
          </nav>
        </div>
        <div className="text-center">
          <p className="font-black text-[#B5A48B] tracking-widest text-lg uppercase">ManosLuAn</p>
          <div className="flex justify-center gap-3 mt-3 text-gray-500">
            <span>.</span>.<span>.</span>👤<span>.</span>.<span>.</span>
          </div>
        </div>
      </aside>

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1 ml-[280px] p-16 flex justify-center">
        <div className="max-w-2xl w-full">
          {preguntaActual < preguntas.length ? (
            <div className="bg-white shadow-2xl rounded-[40px] p-10 text-center relative border border-white">
              
              <div className="inline-block px-4 py-1 rounded-full bg-[#F4EBD6] text-[#8a7a5f] text-[10px] font-black uppercase mb-6 tracking-widest">
                {pregunta.tipo === 'letra' ? 'Nivel: Alfabeto ' : 'Nivel: Frases '}
              </div>

              <div className="flex justify-between mb-8 text-[11px] font-black text-gray-400 uppercase tracking-widest px-4">
                <span>Reto {preguntaActual + 1} de {preguntas.length}</span>
                <span className="text-green-500 bg-green-50 px-3 py-1 rounded-lg border border-green-100">Aciertos: {puntaje}</span>
              </div>

              <p className="text-2xl mb-8 font-bold text-gray-800">¿Qué representa esta seña?</p>

              {/* CONTENEDOR DE IMAGEN CON PARCHE ANTI-TRAMPA AJUSTADO */}
                <div className="relative inline-block bg-[#fcfcfc] p-6 rounded-3xl border border-gray-100 mb-10 shadow-sm overflow-hidden">
                  <img src={pregunta.imagen} alt="Seña Secreta" className="w-64 h-64 object-contain" />
                  
                  {/* PARCHE PECHADO A LA ESQUINA INFERIOR DERECHA */}
                  <div className="absolute bottom-6 right-6 w-20 h-20 bg-white/60 backdrop-blur-md border-l border-t border-white/40 rounded-tl-2xl shadow-lg flex items-center justify-center">
                    <span className="text-[10px] text-gray-500 font-black uppercase tracking-tighter opacity-40">Oculto</span>
                  </div>
                </div>
              <div className="grid grid-cols-2 gap-4">
                {pregunta.opciones.map((opcion) => (
                  <button
                    key={opcion}
                    disabled={!!respuestaSeleccionada}
                    onClick={() => manejarRespuesta(opcion)}
                    className={`p-5 rounded-2xl font-black text-xs transition-all border-b-4 active:border-b-0 active:translate-y-1 ${
                      respuestaSeleccionada === opcion
                        ? opcion === pregunta.correcta
                          ? "bg-green-500 border-green-700 text-white"
                          : "bg-red-500 border-red-700 text-white"
                        : "bg-gray-50 border-gray-200 hover:bg-[#F4EBD6] hover:border-[#EADFC9] text-gray-700"
                    }`}
                  >
                    {opcion}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-white p-14 rounded-[50px] shadow-2xl text-center border-t-8 border-[#EADFC9]">
              <span className="text-8xl mb-6 block">🥇</span>
              <h2 className="text-4xl font-black mb-4 text-gray-800 italic">¡Excelente,!</h2>
              <p className="text-gray-500 mb-10 text-lg">Has completado el taller de ManosLuAn.</p>
              
              <div className="bg-[#F4EBD6] p-8 rounded-3xl mb-10">
                <p className="text-gray-600 font-bold uppercase text-sm mb-2 tracking-widest">Resultado Final</p>
                <div className="text-7xl font-black text-[#5e5340]">
                  {puntaje} <span className="text-3xl opacity-30">/ {preguntas.length}</span>
                </div>
              </div>

              <button 
                onClick={() => window.location.reload()} 
                className="bg-[#EADFC9] text-gray-800 px-14 py-5 rounded-2xl font-black hover:bg-[#d9ccb3] transition-all shadow-[0_10px_0_0_#B5A48B] hover:shadow-[0_5px_0_0_#B5A48B] active:shadow-none active:translate-y-[5px]"
              >
                REPETIR DESAFÍO
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}