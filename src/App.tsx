
function App() {

  return (
    <>
        <header className="flex justify-center items-center my-11 md:my-11 xl:my-16">
            <img src="/img/logo.svg" alt="logo" />
        </header>
        {/* CONTENIDO DE LA CALCULADORA */}
        <main className="
          w-full h-4/5 bg-white rounded-t-4xl py-8 px-6
          md:w-[600px] md:h-[800px] md:rounded-3xl md:py-12 md:px-20 md:mb-12
          lg:w-[920px] lg:h-[481px] lg:p-8 m-auto
        ">
          {/** CONTENEDOR DE LA CALCULADORA */}
          <div className="flex flex-col items-center justify-center gap-8
            lg:flex-row lg:justify-between">
            <div className="w-20 h-20 bg-blue-300 rounded-2xl"></div>
            <div className="w-80 h-64 bg-[#00474B] rounded-2xl p-6
              md:w-[457px] md:h-[300px] md:py-6 md:px-8
              lg:w-[413px] lg:h-[417px]"></div>
          </div>
        </main>
    </>
  )
}

export default App
