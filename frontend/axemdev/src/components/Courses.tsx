import Footer from "./Footer";
import Header from "./Header";
import img from "../assets/image.png";

export default function Courses() {
  return (
    <>
      <Header />
      <h1 className="font-axem font-bold text-3xl text-white text-center">
        CURSOS DISPONÍVEIS
      </h1>
      <div className="flex justify-center mt-20 pl-8 pr-8 h-screen">
        <div className="grid grid-cols-4 grid-rows-6 gap-8 w-5/6 h-full">
          <div className="rounded-3xl bg-gradient-to-b from-darkaxem to-grayaxem row-span-4">
            <div className="flex justify-center p-4">
              <img
                className="rounded-full size-36 mt-4"
                src={img}
                alt="curso"
              />
            </div>
            <p className="font-axem font-bold mt-2 text-2xl text-white text-center">
              CURSO
            </p>
            <div className="flex justify-center">
              <hr className="text-grayaxem mt-4 w-3/6" />
            </div>
            <p className="font-axem text-white text-center p-8">
              Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
            <div className="flex justify-center">
              <button className="rounded-full text-darkaxem bg-gradient-to-b from-darkgreenaxem to-lightgreenaxem w-32 h-10 text-xs font-axem font-bold max-sm:w-20 p-1">
                INSCREVER-SE
              </button>
            </div>
          </div>
          <div className="rounded-3xl bg-gradient-to-b from-darkaxem to-grayaxem row-span-4">
            <div className="flex justify-center p-4">
              <img
                className="rounded-full size-36 mt-4"
                src={img}
                alt="curso"
              />
            </div>
            <p className="font-axem font-bold mt-2 text-2xl text-white text-center">
              CURSO
            </p>
            <div className="flex justify-center">
              <hr className="text-grayaxem mt-4 w-3/6" />
            </div>
            <p className="font-axem text-white text-center p-8">
              Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
            <div className="flex justify-center">
              <button className="rounded-full text-darkaxem bg-gradient-to-b from-darkgreenaxem to-lightgreenaxem w-32 h-10 text-xs font-axem font-bold max-sm:w-20 p-1">
                INSCREVER-SE
              </button>
            </div>
          </div>
          <div className="rounded-3xl bg-gradient-to-b from-darkaxem to-grayaxem row-span-4">
            <div className="flex justify-center p-4">
              <img
                className="rounded-full size-36 mt-4"
                src={img}
                alt="curso"
              />
            </div>
            <p className="font-axem font-bold mt-2 text-2xl text-white text-center">
              CURSO
            </p>
            <div className="flex justify-center">
              <hr className="text-grayaxem mt-4 w-3/6" />
            </div>
            <p className="font-axem text-white text-center p-8">
              Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
            <div className="flex justify-center">
              <button className="rounded-full text-darkaxem bg-gradient-to-b from-darkgreenaxem to-lightgreenaxem w-32 h-10 text-xs font-axem font-bold max-sm:w-20 p-1">
                INSCREVER-SE
              </button>
            </div>
          </div>
          <div className="rounded-3xl bg-gradient-to-b from-darkaxem to-grayaxem row-span-4">
            <div className="flex justify-center p-4">
              <img
                className="rounded-full size-36 mt-4"
                src={img}
                alt="curso"
              />
            </div>
            <p className="font-axem font-bold mt-2 text-2xl text-white text-center">
              CURSO
            </p>
            <div className="flex justify-center">
              <hr className="text-grayaxem mt-4 w-3/6" />
            </div>
            <p className="font-axem text-white text-center p-8">
              Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
            <div className="flex justify-center">
              <button className="rounded-full text-darkaxem bg-gradient-to-b from-darkgreenaxem to-lightgreenaxem w-32 h-10 text-xs font-axem font-bold max-sm:w-20 p-1">
                INSCREVER-SE
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
