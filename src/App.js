import React, { useState } from 'react'

const App = () => {
  const [color, setColor] = useState("#60a5eb");
  const colors = [
    "#ef4444",
    "#22c55e",
    "#3b82f6",
    "#8b5cf6",
    "#f97316",
    "#ec4899",
  ];
  return (
    <div
      className="w-full h-screen transition-all duration-500"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center top-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-white px-3 py-2 rounded-2xl">
          {
  colors.map((item) => (
    <button
      key={item}
      onClick={() => setColor(item)}
      style={{ backgroundColor: item }}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    >
      {item}
    </button>
  ))}
  

        </div>
      </div>
    </div>
  );
}

export default App



