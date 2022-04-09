import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import * as Icons from "./components/icons";
import { data } from "./data";

const Home = () => {
  const params = useParams();
  const [closedCategories, setClosedCategories] = useState([]);

  const server = data.find((item) => +item.id === +params.id);
  const categories = server.categories;
  const channels = categories.map((item) => item.channels).flat();
  const channel = channels.find((item) => +item.id === +params.channelID);

  const toggleCategory = (categoryID) => {
    setClosedCategories((prev) =>
      prev.includes(categoryID)
        ? prev.filter((item) => item !== categoryID)
        : [...prev, categoryID]
    );
  };

  return (
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
          {categories.map((category) => (
            <div key={category.id}>
              {category.label ? (
                <button
                  className="flex w-full items-center px-0.5 font-title text-xs uppercase tracking-wide text-gray-500 hover:text-gray-100"
                  onClick={() => toggleCategory(category.id)}
                >
                  <Icons.Arrow
                    className={`${
                      closedCategories.includes(category.id) ? "-rotate-90" : ""
                    } mr-0.5 h-3 w-3 transition`}
                  />
                  {category.label}
                </button>
              ) : null}
              <div className="mt-1 space-y-0.5">
                {category.channels
                  .filter((channel) =>
                    closedCategories.includes(category.id)
                      ? channel.unread
                      : true
                  )
                  .map((channel) => (
                    <ChannelLink channel={channel} key={channel.id} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex min-w-0 flex-1 flex-col bg-gray-700">
        <div className="flex h-12 items-center px-2 shadow-sm">
          <div className="flex items-center">
            <Icons.Hashtag className="mx-2 h-6 w-6 font-semibold text-gray-400" />
            <span className="mr-2 whitespace-nowrap font-title text-white">
              {channel.label}
            </span>
          </div>

          {channel.description ? (
            <>
              <div className="ml-2 h-6 w-px bg-gray-550/[.48]" />
              <div className="ml-4 truncate text-sm font-medium text-gray-300">
                {channel.description}
              </div>
            </>
          ) : null}

          <div className="ml-auto flex items-center">
            <button className="text-gray-200 hover:text-gray-100">
              <Icons.HashtagWithSpeechBubble className="mx-2 h-6 w-6" />
            </button>
            <button className="text-gray-200 hover:text-gray-100">
              <Icons.Bell className="mx-2 h-6 w-6" />
            </button>
            <button className="text-gray-200 hover:text-gray-100">
              <Icons.Pin className="mx-2 h-6 w-6" />
            </button>
            <button className="text-gray-200 hover:text-gray-100">
              <Icons.People className="mx-2 h-6 w-6" />
            </button>
            <div className="relative mx-2">
              <input
                type="text"
                placeholder="Search"
                className="h-6 w-36 rounded border-none bg-gray-900 px-1.5 text-sm placeholder:font-medium placeholder:text-gray-400"
              />
              <div className="absolute inset-y-0 right-0 flex items-center px-1.5">
                <Icons.Spyglass className="h-4 w-4 text-gray-400" />
              </div>
            </div>
            <button className="text-gray-200 hover:text-gray-100">
              <Icons.Inbox className="mx-2 h-6 w-6" />
            </button>
            <button className="text-gray-200 hover:text-gray-100">
              <Icons.QuestionCircle className="mx-2 h-6 w-6" />
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-y-scroll">
          {channel.messages.map((message, i) => (
            <div key={i}>
              {i === 0 || message.user !== channel.messages[i - 1].user ? (
                <MessageWithUser message={message} />
              ) : (
                <Message message={message} />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

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
      to={`/servers/${params.id}/channels/${channel.id}`}
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
        } ml-auto h-4 w-4 text-gray-300 hover:text-gray-200`}
      />
    </Link>
  );
}

function MessageWithUser({ message }) {
  return (
    <div className="mt-[17px] flex px-4 py-1 pl-4 pr-16 leading-[22px] hover:bg-gray-950/[0.07] hover:bg-opacity-30">
      <img className="mr-4 h-10 w-10 rounded-full" src={message.avatarUrl} />
      <div>
        <p className="flex items-baseline">
          <span className="mr-2 text-sm font-medium text-emerald-600">
            {message.user}
          </span>
          <span className="text-xs text-gray-400">{message.date}</span>
        </p>
        <p className="text-slate-300">{message.text}</p>
      </div>
    </div>
  );
}

function Message({ message }) {
  return (
    <div className="px-4 py-0.5 pl-4 pr-16 leading-[22px] hover:bg-gray-950/[0.07] hover:bg-opacity-30">
      <p className="pl-14 text-slate-300">{message.text}</p>
    </div>
  );
}

export default Home;
