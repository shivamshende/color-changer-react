import React, { useState } from 'react'

export default function App() {
  const [Color, setColor] = useState("olive")

  function addRed(){
    let updatedColor = '#912409'
    setColor(updatedColor)
  }
  function addWhite(){
    let updatedColor = '#cccccc'
    setColor(updatedColor)
  }
  function addRed(){
    let updatedColor = '#912409'
    setColor(updatedColor)
  }
  function addYellow(){
    let updatedColor = '#947d32'
    setColor(updatedColor)
  }
  function addGreen(){
    let updatedColor = '#09951d'
    setColor(updatedColor)
  }
  function addGray(){
    let updatedColor = '#4e4f4a'
    setColor(updatedColor)
  }
  function addPurple(){
    let updatedColor = '#593b75'
    setColor(updatedColor)
  }

  return (
    <div className='w-full, h-screen duration-200' style={{backgroundColor: Color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={addRed} className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-600'>Red</button>
          <button onClick={addWhite} className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-gray-400'>White</button>
          <button onClick={addYellow} className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-yellow-600'>Yellow</button>
          <button onClick={addGreen} className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-green-600'>Green</button>
          <button onClick={addGray} className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-gray-600'>Gray</button>
          <button onClick={addPurple} className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-purple-600'>Purple</button>
        </div>
        </div>     
    </div>
  )
}

// we can uproach like this,
{/* <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-purple-600'>Purple</button> */}
