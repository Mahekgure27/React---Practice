import React,{useState} from 'react'

const App = () => {
  const [color,setcolor] = useState("#101827");
  return (
    <>
    <div style={{ backgroundColor: color  }} className='h-screen w-full flex justify-center items-center'>
    <div style = {{backgroundColor: "#292E3C"}} className='border-2 rounded-4xl px-40 py-10 shadow-md'>
    <h1 className='text-4xl text font-bold mb-6 text-white'>Background Changer</h1> 
    <div className='flex align-center justify-cente gap-4'>
      <button onClick = {() => setcolor("#3C82F6")} className='bg-blue-500 text-1xl  text-white border-2 rounded-4xl px-3 py-1 '>Deep Blue</button>
      <button onClick = {() => setcolor("#22C55D")}  className='bg-green-400 text-white text-1xl border-2 rounded-4xl px-3 py-1   ' >Forest green</button>
      <button onClick = {() => setcolor("#EF4444")} className='bg-red-500  text-white text-1xl border-2 rounded-4xl px-3 py-1  '>Crimson Red</button>
    </div>
    </div>
    </div>
    </>
  )
}

export default App
