import * as Icons from "./components/icons";
import data from "./data.json";

const Home = () => (
  <>
    <div className="flex w-60 flex-col bg-gray-800">
      <button className="flex h-12 items-center px-4 font-title text-[15px] text-white shadow-sm transition hover:bg-gray-550/[0.16]">
        <div className="relative mr-1 h-4 w-4">
          <Icons.Verified className="absolute h-4 w-4 text-gray-550" />
          <Icons.Check className="absolute h-4 w-4" />
        </div>
        Tailwind CSS
        <Icons.Chevron className="ml-auto h-[18px] w-[18px] opacity-80" />
      </button>
      <div className="flex-1 space-y-[21px] overflow-y-scroll pt-3 font-medium">
        {data[1].categories.map((category) => (
          <div key={category.id}>
            {category.label ? (
              <button className="flex items-center px-0.5 font-title text-xs uppercase tracking-wide text-gray-500">
                <Icons.ArrowComponent className="mr-0.5 h-3 w-3" />
                {category.label}
              </button>
            ) : null}
            <div className="mt-1 space-y-0.5">
              {category.channels.map((channel) => (
                <ChannelLink channel={channel} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="flex flex-1 flex-col bg-gray-600">
      <div className="p-3 text-white shadow-sm">General</div>
      <div className="flex-1 space-y-2 overflow-y-scroll p-4"></div>
    </div>
  </>
);

function ChannelLink({ channel }) {
  let Icon = channel.icon ? Icons[channel.icon] : Icons.Hashtag;

  return (
    <a
      href="#"
      className="group mx-2 flex items-center rounded py-1 pl-2 pr-2.5 text-gray-500 hover:bg-gray-550/40 hover:text-gray-200"
      key={channel.id}
    >
      <Icon className="mr-1.5 h-5 w-5 text-gray-525" />
      {channel.label}
      <Icons.AddPerson className="ml-auto h-4 w-4 text-gray-300 opacity-0 hover:text-gray-200 group-hover:opacity-100" />
    </a>
  );
}

export default Home;
