const App = () => {
  return (
    <div className="flex h-screen text-gray-200">
      <div className="bg-gray-900 p-3 space-y-2 overflow-y-scroll">
        {[...Array(40)].map((_, i) => (
          <div className="bg-gray-700 w-12 h-12 flex items-center justify-center rounded-full">
            {i}
          </div>
        ))}
      </div>
      <div className="bg-gray-800 w-60 flex flex-col">
        <div className="px-3 shadow-md h-12 flex items-center text-white">
          Tailwind CSS
        </div>
        <div className="p-3 flex-1 overflow-y-scroll space-y-2">
          {[...Array(40)].map((_, i) => (
            <p>Channels {i}</p>
          ))}
        </div>
      </div>
      <div className="bg-gray-600 flex-1 flex flex-col">
        <div className="p-3 shadow-md text-white">General</div>
        <div className="flex-1 p-4 overflow-y-scroll space-y-2">
          {[...Array(40)].map((_, i) => (
            <p>
              Messages {i}: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Donec sed maximus neque. Duis ut rhoncus nisi. Vestibulum
              vitae ex odio. Sed sagittis viverra ligula volutpat suscipit.
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
