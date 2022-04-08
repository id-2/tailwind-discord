const Home = () => (
  <>
    <div className="bg-gray-800 w-60 flex flex-col">
      <div className="px-3 shadow-md h-12 flex items-center text-white font-title">
        Dashboard
      </div>
      <div className="p-3 flex-1 overflow-y-scroll space-y-2 font-medium">
        <p>Friends</p>
      </div>
    </div>
    <div className="bg-gray-600 flex-1 flex flex-col">
      <div className="p-3 shadow-md text-white">General</div>
      <div className="flex-1 p-4 overflow-y-scroll space-y-2"></div>
    </div>
  </>
);

export default Home;
