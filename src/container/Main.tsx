import Game from "../components/Game";
import ScoreDash from "../components/ScoreDash";
import Footer from "./Footer";

export default function Main() {
  return (
    <main className="h-screen bg-[radial-gradient(circle_farthest-side_at_top_center,var(--tw-gradient-stops))] from-background-from to-background-to">
      <ScoreDash />
      <Game />
      <Footer />
    </main>
  );
}
