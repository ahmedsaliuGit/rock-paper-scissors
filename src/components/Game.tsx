import TriangleBg from "../assets/bg-triangle.svg";
import PaperIcon from "../assets/icon-paper.svg";
import ScissorsIcon from "../assets/icon-scissors.svg";
import RockIcon from "../assets/icon-rock.svg";

type GamePropsType = {
  handleUserChoice: (choice: string) => void;
  winner: string;
  userChoice: string;
  houseChoice: string;
  onPlayAgain: () => void;
  chosen: boolean;
};

export default function Game({
  handleUserChoice,
  winner,
  userChoice,
  houseChoice,
  onPlayAgain,
  chosen,
}: GamePropsType) {
  const renderChoiceImage = (choice: string) => {
    switch (choice) {
      case "paper":
        return (
          <div className="flex h-[7rem] w-[7rem] items-center justify-center rounded-full bg-gradient-radial from-paper-from to-paper-to md:h-[10rem] md:w-[10rem]">
            <div className="flex h-[5rem] w-[5rem] items-center justify-center rounded-full bg-white md:h-[7.5rem] md:w-[7.5rem]">
              <img
                src={PaperIcon}
                alt="paper icon"
                className="w-[2.4rem] md:w-auto"
              />
            </div>
          </div>
        );

      case "scissors":
        return (
          <div className="flex h-[7rem] w-[7rem] items-center justify-center rounded-full bg-gradient-radial from-scissors-to to-scissors-to md:h-[10rem] md:w-[10rem]">
            <div className="flex h-[5rem] w-[5rem] items-center justify-center rounded-full bg-white md:h-[7.5rem] md:w-[7.5rem]">
              <img
                src={ScissorsIcon}
                alt="scissor icon"
                className="w-[2.4rem] md:w-auto"
              />
            </div>
          </div>
        );

      case "rock":
        return (
          <div className="flex h-[7rem] w-[7rem] items-center justify-center rounded-full bg-gradient-radial from-rock-to to-rock-to md:h-[10rem] md:w-[10rem] ">
            <div className="flex h-[5rem] w-[5rem] items-center justify-center rounded-full bg-white md:h-[7.5rem] md:w-[7.5rem]">
              <img
                src={RockIcon}
                alt="rock icon"
                className="w-[2.4rem] md:w-auto"
              />
            </div>
          </div>
        );

      default:
        break;
    }
  };

  const resultElement = (
    <>
      <div className="md:flex justify-between items-center text-white hidden">
        <div className="md:flex md:flex-col md:items-center md:justify-center">
          <h1 className="mb-8 text-center text-2xl uppercase tracking-widest">
            You Picked
          </h1>
          {renderChoiceImage(userChoice)}
        </div>
        <div className="md:flex md:flex-col md:items-center md:justify-center">
          <p className="mb-4 text-[3rem] font-extrabold uppercase tracking-widest">
            {winner}
          </p>
          <button
            type="button"
            onClick={onPlayAgain}
            className="rounded-lg bg-white px-16 py-2 uppercase tracking-widest text-dark-text hover:text-red-400"
          >
            Play Again
          </button>{" "}
        </div>
        <div className="md:flex md:flex-col md:items-center md:justify-center">
          <h1 className="mb-8 text-center text-2xl uppercase tracking-widest">
            The House Picked
          </h1>
          {renderChoiceImage(houseChoice)}
        </div>
      </div>
      {/* division for Desktop ends */}

      {/* This devision alignment is for mobile */}
      <div className="flex items-center justify-between md:hidden text-white">
        <div className="flex flex-col items-center justify-center">
          <h1 className="mb-8 text-center text-xl uppercase tracking-widest">
            You Picked
          </h1>

          {renderChoiceImage(userChoice)}
        </div>

        <div className="flex flex-col items-center justify-center">
          <h1 className="mb-8 text-center text-xl uppercase tracking-widest">
            The House Picked
          </h1>
          {renderChoiceImage(houseChoice)}
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center justify-center md:hidden">
        <p className="mb-4 text-[3rem] font-extrabold uppercase tracking-widest text-white">
          {winner}
        </p>
        <button
          type="button"
          onClick={onPlayAgain}
          className="rounded-lg bg-white px-16 py-2 uppercase tracking-widest text-dark-text hover:text-red-400"
        >
          Play Again
        </button>{" "}
      </div>
    </>
  );

  return (
    <div className="relative mb-40 md:mb-10">
      {chosen ? (
        resultElement
      ) : (
        <>
          <div className="absolute z-0 w-full px-8 py-12">
            <img
              src={TriangleBg}
              alt="Triangle background"
              className="w-[240px] md:w-[340px] mx-auto"
            />
          </div>
          <div className="mt-4 grid grid-cols-2 place-items-center gap-8">
            <button
              className="h-28 w-28 md:w-40 md:h-40 md:place-self-end md:mr-12 rounded-full z-10 flex justify-center items-center bg-gradient-radial from-paper-from to-paper-to"
              onClick={() => handleUserChoice("paper")}
            >
              <div className="w-20 h-20 md:w-32 md:h-32 bg-white rounded-full flex justify-center items-center">
                <img
                  src={PaperIcon}
                  width={40}
                  className="block md:hidden"
                  alt="Paper Icon"
                />
                <img
                  src={PaperIcon}
                  className="hidden md:block"
                  alt="Paper Icon"
                />
              </div>
            </button>
            <button
              className="h-28 w-28 md:w-40 md:h-40 md:place-self-start md:ml-12 rounded-full z-10 flex justify-center items-center bg-gradient-radial from-scissors-to to-scissors-to"
              onClick={() => handleUserChoice("scissors")}
            >
              <div className="w-20 h-20 md:w-32 md:h-32 bg-white rounded-full flex justify-center items-center">
                <img
                  src={ScissorsIcon}
                  width={40}
                  className="block md:hidden"
                  alt="Scissors Icon"
                />
                <img
                  src={ScissorsIcon}
                  className="hidden md:block"
                  alt="Scissors Icon"
                />
              </div>
            </button>
            <button
              className="col-span-2 h-28 w-28 md:w-40 md:h-40 md:mt-4 rounded-full z-10 flex justify-center items-center bg-gradient-radial from-rock-to to-rock-to"
              onClick={() => handleUserChoice("rock")}
            >
              <div className="w-20 h-20 md:w-32 md:h-32 bg-white rounded-full flex justify-center items-center">
                <img
                  src={RockIcon}
                  width={40}
                  className="block md:hidden"
                  alt="Rock Icon"
                />
                <img
                  src={RockIcon}
                  className="hidden md:block"
                  alt="Rock Icon"
                />
              </div>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
