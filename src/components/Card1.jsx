import { useState } from "react";

export default function Card1() {
  return (
    <div className="max-w-md mx-auto p-6 bg-gray-900 rounded-xl shadow-lg border border-white/10 mt-6">
      <h1 className="text-2xl font-bold text-white mb-6">
        Contadores que se actualizan separadamente
      </h1>

      <div className="flex flex-col gap-4">
        <MyButton />
        <MyButton />
      </div>
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button
      onClick={handleClick}
      className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-all active:scale-95"
    >
      Hiciste clic {count} veces
    </button>
  );
}
