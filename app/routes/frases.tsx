export const loader = () => null;
import { Link } from "react-router";

import ABURRIDO from "C:/Users/usuario/Documents/proyecto_lenguaje/assets/src/assets/senas/ABURRIDO.png";
import AYER from "C:/Users/usuario/Documents/proyecto_lenguaje/assets/src/assets/senas/AYER.png";
import BEBE from "C:/Users/usuario/Documents/proyecto_lenguaje/assets/src/assets/senas/BEBE.png";
import COMO_ESTAS from "C:/Users/usuario/Documents/proyecto_lenguaje/assets/src/assets/senas/COMO_ESTAS.png";
import COMO from "C:/Users/usuario/Documents/proyecto_lenguaje/assets/src/assets/senas/COMO.png";
import CUAL from "C:/Users/usuario/Documents/proyecto_lenguaje/assets/src/assets/senas/CUAL.png";
import CUANDO from "C:/Users/usuario/Documents/proyecto_lenguaje/assets/src/assets/senas/CUANDO.png";
import DONDE_VIVES from "C:/Users/usuario/Documents/proyecto_lenguaje/assets/src/assets/senas/DONDE_VIVES.png";
import DORMIR from "C:/Users/usuario/Documents/proyecto_lenguaje/assets/src/assets/senas/DORMIR.png";
import FAMILIA from "C:/Users/usuario/Documents/proyecto_lenguaje/assets/src/assets/senas/FAMILIA.png";
import HIJO from "C:/Users/usuario/Documents/proyecto_lenguaje/assets/src/assets/senas/HIJO.png";
import HOMBRE from "C:/Users/usuario/Documents/proyecto_lenguaje/assets/src/assets/senas/HOMBRE.png";
import MAMA from "C:/Users/usuario/Documents/proyecto_lenguaje/assets/src/assets/senas/MAMA.png";
import MUJER from "C:/Users/usuario/Documents/proyecto_lenguaje/assets/src/assets/senas/MUJER.png";
import NINA from "C:/Users/usuario/Documents/proyecto_lenguaje/assets/src/assets/senas/NINA.png";
import PAPA from "C:/Users/usuario/Documents/proyecto_lenguaje/assets/src/assets/senas/PAPA.png";
import POR_QUE from "C:/Users/usuario/Documents/proyecto_lenguaje/assets/src/assets/senas/POR_QUE.png";
import PREGUNTAME from "C:/Users/usuario/Documents/proyecto_lenguaje/assets/src/assets/senas/PREGUNTAME.png";
import QUE_PASO from "C:/Users/usuario/Documents/proyecto_lenguaje/assets/src/assets/senas/QUE_PASO.png";
import QUE from "C:/Users/usuario/Documents/proyecto_lenguaje/assets/src/assets/senas/QUIEN.png";
import QUIEN from "C:/Users/usuario/Documents/proyecto_lenguaje/assets/src/assets/senas/QUIEN.png";
import SALUDOS_DIAS from "C:/Users/usuario/Documents/proyecto_lenguaje/assets/src/assets/senas/SALUDOS_DIAS.png";
import TIO from "C:/Users/usuario/Documents/proyecto_lenguaje/assets/src/assets/senas/TIO.png";

export default function Inicio() {
  return (
    <div className="flex min-h-screen bg-[#D9D2CE]">

      {/* SIDEBAR */}
      <aside className="w-[280px] bg-[#EADFC9] p-8 flex flex-col gap-10 shadow-md">
        <h2 className="text-[20px] font-semibold text-[#000] leading-tight">
          Aprendizaje de <br /> Lengua de Señas
        </h2>

        {/* MENÚ */}
        <nav className="flex flex-col gap-4 text-[18px]">
          <button className="flex items-center gap-4 px-4 py-3 bg-[#F4EBD6] rounded-md hover:bg-[#e2d7c0] transition">
            <Link to="inicio"><span className="text-[22px]">🏠</span> inicio</Link>
          </button>

          <button className="flex items-center gap-4 px-4 py-3 bg-[#F4EBD6] rounded-md hover:bg-[#e2d7c0] transition">
            <Link to="alfabeto"><span className="text-[22px]">📘</span> Alfabeto</Link>
          </button>

          <button className="flex items-center gap-4 px-4 py-3 bg-[#F4EBD6] rounded-md hover:bg-[#e2d7c0] transition">
            <Link to="frases"><span className="text-[22px]">📚</span> frases</Link>
          </button>

          <button className="flex items-center gap-4 px-4 py-3 bg-[#F4EBD6] rounded-md hover:bg-[#e2d7c0] transition">
          <Link to="taller"><span className="text-[22px]">🎓</span> taller</Link>
          </button>
        </nav>

        {/* TEXTO INFERIOR */}
        <p className="text-[15px] text-gray-700">
          ¿Por qué aprender lenguaje de señas? El lenguaje de señas abre puertas
          a conexiones significativas y a una comunicación inclusiva.
        </p>
      </aside>

      {/* CONTENIDO PRINCIPAL */}
      <section className="flex-1 bg-white p-16">
        <h1 className="text-3xl font-bold text-center text-[#222]">
          Frases Básicas
        </h1>

        <p className="text-center mt-6 max-w-2xl mx-auto text-gray-700 text-[17px]">
          Aprende frases esenciales para la comunicación diaria. Estas expresiones 
          comunes te ayudarán a iniciar conversaciones e interactuar con confianza.
        </p>

{/* IMÁGENES */}
  <div className="grid grid-cols-3 gap-3">
    <img
      src={ABURRIDO}
      alt="Seña Aburrido"
      className="w-70 h-70 object-contain rounded"
    />
    <img
      src={AYER}
      alt="Seña Ayer"
      className="w-70 h-70 object-contain rounded"
    />
        <img
      src={BEBE}
      alt="Seña Ayer"
      className="w-70 h-70 object-contain rounded"
    />
       <img
      src={COMO_ESTAS}
      alt="Seña Ayer"
      className="w-70 h-70 object-contain rounded"
    />
       <img
      src={COMO}
      alt="Seña Ayer"
      className="w-70 h-70 object-contain rounded"
    />
     <img
      src={CUANDO}
      alt="Seña Ayer"
      className="w-70 h-70 object-contain rounded"
    />
    <img
      src={DONDE_VIVES}
      alt="Seña Ayer"
      className="w-70 h-70 object-contain rounded"
    />
    <img
      src={DORMIR}
      alt="Seña Ayer"
      className="w-70 h-70 object-contain rounded"
    />
    <img
      src={FAMILIA}
      alt="Seña Ayer"
      className="w-70 h-70 object-contain rounded"
    />
    <img
      src={HIJO}
      alt="Seña Ayer"
      className="w-70 h-70 object-contain rounded"
    />
    <img
      src={HOMBRE}
      alt="Seña Ayer"
      className="w-70 h-70 object-contain rounded"
    />
    <img
      src={MAMA}
      alt="Seña Ayer"
      className="w-70 h-70 object-contain rounded"
    />
    <img
      src={MUJER}
      alt="Seña Ayer"
      className="w-70 h-70 object-contain rounded"
    />
    <img
      src={NINA}
      alt="Seña Ayer"
      className="w-70 h-70 object-contain rounded"
    />
    <img
      src={PAPA}
      alt="Seña Ayer"
      className="w-70 h-70 object-contain rounded"
    />
    <img
      src={POR_QUE}
      alt="Seña Ayer"
      className="w-70 h-70 object-contain rounded"
    />
    <img
      src={PREGUNTAME}
      alt="Seña Ayer"
      className="w-70 h-70 object-contain rounded"
    />
    <img
      src={QUE_PASO}
      alt="Seña Ayer"
      className="w-70 h-70 object-contain rounded"
    />

    <img
      src={QUE}
      alt="Seña Ayer"
      className="w-70 h-70 object-contain rounded"
    />
    <img
      src={QUIEN}
      alt="Seña Ayer"
      className="w-70 h-70 object-contain rounded"
    />
    <img
      src={TIO}
      alt="Seña Ayer"
      className="w-70 h-70 object-contain rounded"
    />
    <div className="col-span-3 flex justify-center -mt-2">{/*h-auto → evita que crezca 
    verticalmente
🔹 max-h-[110px] → controla el alto real
🔹 -mt-2 → acerca la imagen a TIO sin romper el grid*/ }
  <img
    src={SALUDOS_DIAS}
    alt="Seña Saludos Días"
    className="w-240 h-auto max-h-[240px] object-contain rounded"
  />
</div>


  </div>
        {/* TARJETAS */}
        <div className="mt-14 flex flex-col gap-6 max-w-2xl mx-auto">
          <div className="flex items-center gap-6 bg-[#ECECEC] p-6 rounded-lg shadow-sm">

  
          {/* CARD 1 */}
          <div className="flex items-center gap-4 bg-[#ECECEC] p-6 rounded-lg shadow-sm">
            <span className="text-4xl">📘</span>
            <div>
              <h3 className="font-bold text-[20px]">Aprende el alfabeto</h3>
              <p className="text-gray-700 text-[15px]">
                Domina los fundamentos del lenguaje de señas con nuestra guía completa del alfabeto.
              </p>
            </div>
          </div>
          {/* CARD 1 */}


  {/* TEXTO */}
  <div>
    <h3 className="font-bold text-[20px]">Aprende el alfabeto</h3>
    <p className="text-gray-700 text-[15px]">
      Domina los fundamentos del lenguaje de señas con nuestra guía completa del alfabeto.
    </p>
  </div>
</div>


          {/* CARD 2 */}
          <div className="flex items-center gap-4 bg-[#ECECEC] p-6 rounded-lg shadow-sm">
            <span className="text-4xl">📝</span>
            <div>
              <h3 className="font-bold text-[20px]">Frases Básicas</h3>
              <p className="text-gray-700 text-[15px]">
                Amplía tu vocabulario con frases esenciales para la comunicación diaria.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="flex items-center gap-4 bg-[#ECECEC] p-6 rounded-lg shadow-sm">
            <span className="text-4xl">🧩</span>
            <div>
              <h3 className="font-bold text-[20px]">Taller de Práctica</h3>
              <p className="text-gray-700 text-[15px]">
                Pon a prueba tus conocimientos y mejora tus habilidades con ejercicios interactivos.
              </p>
            </div>
          </div>
        </div>

      </section>

    {/* <main className="flex-1 p-10 bg-white">
        <h1 className="text-4xl font-bold mb-4">Inicio</h1>
        <p className="text-lg text-gray-700">
          Bienvenido al aprendizaje de Lengua de Señas.
        </p>
    </main> */}
    </div>
  );
}

