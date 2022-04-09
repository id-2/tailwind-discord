import { Link, useParams } from "react-router-dom";
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
              <button className="flex w-full items-center px-0.5 font-title text-xs uppercase tracking-wide text-gray-500 hover:text-gray-100">
                <Icons.ArrowComponent className="mr-0.5 h-3 w-3" />
                {category.label}
              </button>
            ) : null}
            <div className="mt-1 space-y-0.5">
              {category.channels.map((channel) => (
                <ChannelLink channel={channel} key={channel.id} />
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
  const params = useParams();
  const Icon = channel.icon ? Icons[channel.icon] : Icons.Hashtag;
  const active = +params.channelID === +channel.id;
  let state = active
    ? "active"
    : channel.unread
    ? "inactiveUnread"
    : "inactiveRead";
  let classes = {
    active: "bg-gray-550/60 text-white",
    inactiveUnread: "text-white hover:bg-gray-550/40 active:bg-gray-550/60",
    inactiveRead:
      "text-gray-500 hover:bg-gray-550/40 hover:text-gray-200 active:bg-gray-550/60",
  };

  return (
    <Link
      to={`/servers/1/channels/${channel.id}`}
      className={`${classes[state]} group relative mx-2 flex items-center rounded py-1 pl-2 pr-2.5`}
    >
      {state === "inactiveUnread" ? (
        <div className="absolute -left-2 h-2 w-1 rounded-r-full bg-white" />
      ) : null}

      <Icon className="mr-1.5 h-5 w-5 text-gray-525" />
      {channel.label}
      <Icons.AddPerson
        className={`${
          active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        } ml-auto h-4 w-4 text-gray-300  hover:text-gray-200 `}
      />
    </Link>
  );
}

export default Home;
