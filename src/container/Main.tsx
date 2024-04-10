import { useEffect, useState } from "react";
import Game from "../components/Game";
import ScoreDash from "../components/ScoreDash";
import Footer from "./Footer";
import RulesModal from "../components/RulesModal";

export default function Main() {
  const [rules, setRules] = useState(true);
  const [score, setScore] = useState(0);
  //state to keep track of player's choice
  const [userChoice, setUserChoice] = useState("");
  //state to keep track of house's choice
  const [houseChoice, setHouseChoice] = useState("");
  const [winner, setWinner] = useState("");
  //state to keep track if user has played or not
  const [chosen, setChosen] = useState(false);

  const handleUserChoice = (choice: string) => {
    setUserChoice(choice);
    setChosen(true);
    // Randomly picks any sign from the hands array
    const hands = ["rock", "paper", "scissors"];
    setHouseChoice(hands[Math.floor(Math.random() * hands.length)]);
  };

  const handlePlayAgain = () => {
    setChosen(false);
    setUserChoice("");
    setHouseChoice("");
  };

  const declareWinner = (user: string, house: string) => {
    if (user === house) {
      setWinner("Draw");
    } else if (
      (user === "paper" && house === "rock") ||
      (user === "scissors" && house === "paper") ||
      (user === "rock" && house === "scissors")
    ) {
      setWinner("You Win");
      setScore((prevScore) => (prevScore += 1));
    } else {
      setWinner("You Lose");
      setScore((prevScore) =>
        prevScore === 0 ? (prevScore = 0) : (prevScore -= 1)
      );
    }
  };

  useEffect(() => {
    declareWinner(userChoice, houseChoice);
  }, [userChoice]);

  return (
    <>
      <main className="h-screen bg-[radial-gradient(circle_farthest-side_at_top_center,var(--tw-gradient-stops))] from-background-from to-background-to p-8">
        <div className="md:max-w-3xl md:mx-auto">
          <ScoreDash score={score} />
          <Game
            handleUserChoice={handleUserChoice}
            winner={winner}
            userChoice={userChoice}
            houseChoice={houseChoice}
            onPlayAgain={handlePlayAgain}
            chosen={chosen}
          />
          <Footer setRules={setRules} winner={winner} />
        </div>
      </main>
      {rules && <RulesModal setRules={setRules} />}
    </>
  );
}
