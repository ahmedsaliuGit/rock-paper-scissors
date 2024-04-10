export default function Footer({
  setRules,
  winner,
}: {
  setRules: (val: boolean) => void;
  winner: string;
}) {
  return (
    <footer
      className={`w-full text-center md:text-right  ${
        winner === "" ? "pt-12" : "pt-0"
      }`}
    >
      <button
        className="text-white uppercase border-[3px] border-header-outline px-8 py-2 rounded-md"
        onClick={() => setRules(true)}
      >
        Rules
      </button>
    </footer>
  );
}
