import React, { useState } from "react";
import Card from "./Components/Card";
function App() {
  const [set, setscore] = useState(10);

  return (
    <>
      <Card />
      <div className="h-1/2 w-full bg-red-100 py-6 flex gap-10 items-center justify-center">
        <h1 className="text-white text-xl rounded-md p-1 bg-blue-400">{set}</h1>
        <button className="text-white text-xl bg-blue-400 p-1 rounded-md" onClick={() => setscore((prev)=>prev+1)}>count</button>
      </div>
    </>
  );
}

export default App;
