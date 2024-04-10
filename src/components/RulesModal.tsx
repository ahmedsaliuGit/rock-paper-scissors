import RulesSVG from "../assets/image-rules.svg";

export default function RulesModal({
  setRules,
}: {
  setRules: (val: boolean) => void;
}) {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none h-screen w-screen bg-white md:hidden">
        <div className="text-center">
          <h1 className="text-3xl text-dark-text mb-32 uppercase font-bold">
            Rules
          </h1>
          <img src={RulesSVG} className="mb-48" alt="Rules svg" />
          <button className="inline-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              onClick={() => setRules(false)}
            >
              <path
                fill="#3B4262"
                fillRule="evenodd"
                d="M16.97 0l2.122 2.121-7.425 7.425 7.425 7.425-2.121 2.12-7.425-7.424-7.425 7.425L0 16.97l7.425-7.425L0 2.121 2.121 0l7.425 7.425L16.971 0z"
                opacity=".25"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="hidden justify-center items-center md:flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black opacity-95">
        <div className="relative w-auto my-6 mx-auto max-w-sm">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none p-10">
            <div className="flex justify-between items-center mb-16">
              <h1 className="text-3xl text-dark-text uppercase font-bold">
                Rules
              </h1>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  onClick={() => setRules(false)}
                >
                  <path
                    fill="#3B4262"
                    fillRule="evenodd"
                    d="M16.97 0l2.122 2.121-7.425 7.425 7.425 7.425-2.121 2.12-7.425-7.424-7.425 7.425L0 16.97l7.425-7.425L0 2.121 2.121 0l7.425 7.425L16.971 0z"
                    opacity=".25"
                  />
                </svg>
              </button>
            </div>
            <img src={RulesSVG} alt="Rules svg" />
          </div>
        </div>
      </div>
    </>
  );
}
