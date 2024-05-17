import homeicon from "../assets/homeicon.png";

export default function Home() {
  //A classe 'crop' abaixo foi criada devido a erros do tailwind e navegador o qual eu não encontrei solução.
  return (
    <div className="flex justify-center items-center h-screen p-8">
      <div className="text-4xl font-axem font-bold h-72 max-lg:text-lg max-lg:mt-72 max-lg:text-center">
        <div className="text-white">
          <span className="bg-gradient-to-b from-darkgreenaxem to-lightgreenaxem crop">
            Explore
          </span>{" "}
          novas tecnologias
          <br />
          na nossa{" "}
          <span className="bg-gradient-to-b from-darkgreenaxem to-lightgreenaxem crop">
            biblioteca virtual.
          </span>
          <br />
          <div className="max-lg:flex justify-center">
            <div className="text-sm w-3/6 font-light max-lg:w-5/6 mt-4">
              Aprenda e desenvolva novas habilidades com a nossa bilbioteca
              virtual que agloba cursos gratuitos de várias empresas num só
              lugar.
            </div>
          </div>
        </div>
        <button className="rounded-full bg-gradient-to-b from-darkgreenaxem to-lightgreenaxem mt-8 text-darkaxem w-52 h-10 text-xs font-axem font-bold max-sm:w-30">
          EXPLORAR CURSOS
        </button>
      </div>
      <img
        className="size-96 max-lg:absolute max-lg:size-72 max-lg:top-28"
        src={homeicon}
        alt=""
      />
    </div>
  );
}
