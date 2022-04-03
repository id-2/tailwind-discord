const App = () => {
  return (
    <div className="flex text-white h-screen">
      <div className="bg-gray-800 p-4">
        <div className="bg-white text-gray-800 w-12 h-12 flex items-center justify-center rounded-full">
          TW
        </div>
      </div>
      <div className="bg-gray-700 w-60 flex flex-col">
        <div className="p-4 shadow-md">Tailwind CSS</div>
        <div className="p-4 flex-1">Channels</div>
      </div>
      <div className="bg-gray-600 flex-1 flex flex-col">
        <div className="p-4 shadow-md">General</div>
        <div className="flex-1 p-4">Messages</div>
      </div>
    </div>
  );
};

export default App;
