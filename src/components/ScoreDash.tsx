import Logo from "../assets/logo.svg";

export default function ScoreDash({ score }: { score: number }) {
  return (
    <div className="pl-4 py-2 pr-2 md:p-4 flex justify-between items-center border-[3px] border-header-outline rounded-md mb-36">
      <img src={Logo} width={75} className="block md:hidden" alt="logo" />
      <img src={Logo} className="hidden md:block" alt="logo" />
      <div className="bg-white py-2 px-5 rounded-md text-center">
        <p className="uppercase text-xs md:text-base text-score-text leading-4">
          Score
        </p>
        <h1 className="text-4xl md:text-6xl font-black">{score}</h1>
      </div>
    </div>
  );
}
