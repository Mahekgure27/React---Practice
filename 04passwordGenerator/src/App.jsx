import React, { useCallback, useEffect, useState } from "react";

const App = () => {
  const [length,setLength] = useState(8);
  const [number,includeNumber] = useState(false);
  const [Character,includecharacter] = useState(false);
  const [Password,setpassword] = useState("");

  const generatePassword = useCallback(() => {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (includeNumber) chars += "0123456789";
    if (includecharacter) chars += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let generated ="";
    for(let i=0; i<length; i++){
    const index = Math.floor(Math.random() * chars.length);
    generated += chars[index];
    }
    setpassword(generated);
    },[length,includeNumber,includecharacter]);

    useEffect (() => {
      generatePassword();
    },[length,includeNumber,includecharacter,generatePassword]);

  const copyToclipboard = () => {
    navigator.clipboard.writeText(Password);
    alert("Password copied!");
  }


  return (
    <>
      <div className="bg-red-400 flex items-center justify-center h-screen w-full">
        <div className="h-[25vw]  gap-5 bg-green-300 flex flex-col items-center justify-center px-10 rounded-4xl py-20 shadow-2xl ">
          <h1 className="text-3xl font-bold text-white">Password Generator</h1>

          <div>
            <input
              className="bg-white px-4 py-3"
              type="text"
              placeholder="Password"
              name=""
              id=""
              value={Password}
              readOnly
            />
            <button className="bg-red-500 px-4 py-3 text-white font-bold"
            onClick={copyToclipboard}
            >
              Copy
            </button>
          </div>

          <div className="flex items-center justify-center gap-4 px-5  ">
            <div className="text-white flex items-center justify-center gap-1  px-6">
              <input type="range" min={8} max={20} 
              value={length}
              onChange={(e) => setLength(e.target.value)}
              name="" id="" />
              <label htmlFor="">Length: {length} </label>
            </div>

            <div className="text-white flex items-center justify-center gap-1">
              <input type="checkbox" 
              value={number}
               onChange={() => includeNumber((prev) => !prev)}
              name="" id="" />
              <label htmlFor=""> Number</label>
            </div>
            <div className="text-white flex items-center justify-center gap-1">
              <input 
              value={Character}
               onChange={() => includecharacter((prev) => !prev)}
              type="checkbox" />
              <label htmlFor=""> Character</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
