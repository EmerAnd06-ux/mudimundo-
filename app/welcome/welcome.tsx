export function Welcome() {
  return (
    <main className="flex min-h-screen bg-[#D9D2CE]">

      {/* SIDEBAR */}
      <aside className="w-[280px] bg-[#EADFC9] p-8 flex flex-col gap-10 shadow-md">
        <h2 className="text-[20px] font-semibold text-[#000] leading-tight">
          Aprendizaje de <br /> Lengua de Señas
        </h2>

        {/* MENÚ */}
        <nav className="flex flex-col gap-4 text-[18px]">
          <button className="flex items-center gap-4 px-4 py-3 bg-[#F4EBD6] rounded-md hover:bg-[#e2d7c0] transition">
            <span className="text-[22px]">🏠</span> inicio
          </button>

          <button className="flex items-center gap-4 px-4 py-3 bg-[#F4EBD6] rounded-md hover:bg-[#e2d7c0] transition">
            <span className="text-[22px]">📘</span> alfabeto
          </button>

          <button className="flex items-center gap-4 px-4 py-3 bg-[#F4EBD6] rounded-md hover:bg-[#e2d7c0] transition">
            <span className="text-[22px]">📚</span> aprendizaje
          </button>

          <button className="flex items-center gap-4 px-4 py-3 bg-[#F4EBD6] rounded-md hover:bg-[#e2d7c0] transition">
            <span className="text-[22px]">🎓</span> cursos
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
          Bienvenido al Aprendizaje <br /> de Lengua de Señas
        </h1>

        <p className="text-center mt-6 max-w-2xl mx-auto text-gray-700 text-[17px]">
          Embárcate en tu viaje para aprender lenguaje de señas. Nuestra plataforma 
          interactiva hace que sea fácil y entretenido comunicarte con la comunidad 
          sorda y con dificultades auditivas.
        </p>

        {/* TARJETAS */}
        <div className="mt-14 flex flex-col gap-6 max-w-2xl mx-auto">

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

    </main>
  );
}