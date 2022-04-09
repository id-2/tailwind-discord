import {
  AddPersonIcon,
  BookIcon,
  CheckIcon,
  ChevronIcon,
  SpeakerphoneIcon,
  VerifiedIcon,
} from "./components/icons";

const Home = () => (
  <>
    <div className="flex w-60 flex-col bg-gray-800">
      <button className="flex h-12 items-center px-4 font-title text-[15px] text-white shadow-sm transition hover:bg-gray-550/[0.16]">
        <div className="relative mr-1 h-4 w-4">
          <VerifiedIcon className="absolute h-4 w-4 text-gray-550" />
          <CheckIcon className="absolute h-4 w-4" />
        </div>
        Level Up Tutorials
        <ChevronIcon className="ml-auto h-[18px] w-[18px] opacity-80" />
      </button>
      <div className="mt-5 flex-1 overflow-y-scroll font-medium">
        <div className="space-y-0.5">
          <a
            href="#"
            className="group mx-2 flex items-center rounded py-1 pl-2 pr-2.5 text-gray-500 hover:bg-gray-550/40 hover:text-gray-200"
          >
            <BookIcon className="mr-1.5 h-5 w-5 text-gray-525" />
            welcome
            <AddPersonIcon className="ml-auto h-4 w-4 text-gray-300 opacity-0 hover:text-gray-200 group-hover:opacity-100" />
          </a>
          <a
            href="#"
            className="group mx-2 flex items-center rounded py-1 pl-2 pr-2.5 text-gray-500 hover:bg-gray-550/40 hover:text-gray-200"
          >
            <SpeakerphoneIcon className="mr-1.5 h-5 w-5 text-gray-525" />
            announcements
            <AddPersonIcon className="ml-auto h-4 w-4 text-gray-300 opacity-0 hover:text-gray-200 group-hover:opacity-100" />
          </a>
        </div>
      </div>
    </div>
    <div className="flex flex-1 flex-col bg-gray-600">
      <div className="p-3 text-white shadow-sm">General</div>
      <div className="flex-1 space-y-2 overflow-y-scroll p-4"></div>
    </div>
  </>
);

export default Home;
