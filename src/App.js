import Button from './components/Button';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative text-center py-3 max-w-full sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-indigo-700 shadow-lg transform -skew-y-3 sm:skew-y-0 sm:-rotate-3 sm:rounded-3xl"></div>
        <div className="relative p-20 bg-white shadow-lg sm:rounded-3xl">
          <div className="max-w-md mx-auto sm:max-w-2xl">
            <Button>Click Me</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
