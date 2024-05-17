export default function Header() {
  return (
    <div className="flex justify-between p-8">
      <img
        className="w-20"
        src="https://i.imgur.com/fKtVpu4.png"
        alt="Logo da AxemDev"
      />
      <div className="gap-8 flex max-sm:gap-4">
        <button className="rounded-full border-white border-2 text-white w-32 h-10 text-xs font-axem font-bold max-sm:w-20">
          CURSOS
        </button>
        <button className="rounded-full bg-gradient-to-b from-darkgreenaxem to-lightgreenaxem text-darkaxem w-32 h-10 text-xs font-axem font-bold max-sm:w-20 p-1">
          SOBRE NÓS
        </button>
      </div>
    </div>
  );
}
