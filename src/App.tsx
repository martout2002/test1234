import React from 'react';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to test1234
        </h1>
        <p className="text-lg mb-8">
          xcfas
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-6 border rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Frontend Framework</h2>
            <p>nextjs</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Build Tool</h2>
            <p>auto</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Styling</h2>
            <p>tailwind</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Project Structure</h2>
            <p>react-spa</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
