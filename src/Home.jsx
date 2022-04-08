import { CheckIcon, ChevronIcon, VerifiedIcon } from "./components/icons";

const Home = () => (
  <>
    <div className="bg-gray-800 w-60 flex flex-col">
      <button className="px-4 shadow-sm h-12 flex items-center text-white font-title text-[15px] hover:bg-gray-550/[0.16] transition">
        <div className="relative w-4 h-4 mr-1">
          <VerifiedIcon className="absolute w-4 h-4 text-gray-550" />
          <CheckIcon className="absolute w-4 h-4" />
        </div>
        Level Up Tutorials
        <ChevronIcon className="w-[18px] h-[18px] opacity-80 ml-auto" />
      </button>
      <div className="p-3 flex-1 overflow-y-scroll space-y-2 font-medium">
        <p>Friends</p>
      </div>
    </div>
    <div className="bg-gray-600 flex-1 flex flex-col">
      <div className="p-3 shadow-sm text-white">General</div>
      <div className="flex-1 p-4 overflow-y-scroll space-y-2"></div>
    </div>
  </>
);

export default Home;
