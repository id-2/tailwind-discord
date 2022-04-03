const App = () => {
  return (
    <div className="bg-gray-700 text-white min-h-screen flex items-center justify-center">
      <div className="max-w-lg">
        <div className="flex hover:bg-gray-800 hover:bg-opacity-30 px-4 py-1">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src="https://i.pravatar.cc/300"
          />
          <div>
            <p className="flex items-baseline">
              <span className="text-emerald-600 text-sm mr-2 font-medium">
                adamawathan
              </span>
              <span className="text-gray-400 text-xs">01/15/2021</span>
            </p>
            <p className="text-slate-300">
              I write slowly when I'm not super confident with a language, and
              when I tried to do JS/TS last year for speed, I consistently
              messed up. like it was an interview or something.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
