"use client";
import { useState } from "react";

export default function page() {
  //   const lightOn = true;
  const [lightOn, setLightOn] = useState(true);
  const [name, setName] = useState("Favour");
  const [count, setCount] = useState(0);
  //   const name = "Favour";

  function changeName() {
    setName("Tope");
  }

  function addCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
  setCount((prev) => Math.max(0, prev - 1));
}
  return (
    <div>
      <div className="flex items-center my-4">
        <button
          onClick={decreaseCount}
          className="bg-green-500 mx-3 p-2 cursor-pointer"
        >
          Decrease
        </button>
        <h1>Count: {count}</h1>
        <button
          onClick={addCount}
          className="bg-red-500 mx-3 p-2 cursor-pointer"
        >
          Increase
        </button>
      </div>
      <h1>Hello Wednesday</h1>
      <h2>My name is: {name}</h2>
      <button
        onClick={changeName}
        className="bg-blue-500 p-2 px-4 cursor-pointer"
      >
        Change Name
      </button>
      {/* <p className="text-black text-xl">
        Is light on: {lightOn ? "Yes" : "No"}
      </p> */}
    </div>
  );
}