"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("") //task
  const [desc, setdesc] = useState("") //description
  const [mainTask, setmainTask] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault() //inbuilt method that prevent form from submitting
    setmainTask([...mainTask, {title, desc}])
    settitle("")
    setdesc("")
       
  }

  //This is to delete the task
  const deleteHandler = (i)=>{
    let copyTask = [...mainTask]
    copyTask.splice(i)
    setmainTask(copyTask)
  }

  let renderTask = <h2>No Task Available</h2>

  //This is to add the task
  if (mainTask.length>0) {
    renderTask = mainTask.map((t, i)=>{
      return (
        <li key={i} className='flex  items-center justify-between mb-8'>
          <div className='flex items-center justify-between w-2/3'>
            <h5 className='text-2xl font-semibold'>{t.title}</h5>
            <h6 className='text-lg font-medium'>{t.desc}</h6>
          </div>
          <button onClick={()=>{
            deleteHandler(i)
          }}
          className='bg-red-500 text-white px-4 py-2
          rounded font-bold'>Delete</button>
        </li>
      )
    })
  }
  return (
  <main className='min-h-screen bg-gradient-to-r
  from-slate-800 to-slate-900'>
    <h1 className='bg-gradient-to-r from-slate-600 to-slate-750 text-white p-5
    text-5xl font-bold text-center'>TO DO LIST</h1>

    <form onSubmit={submitHandler}>
      <input type='text' placeholder='Enter Task Here' className='text-2xl border-blue-400
      border-4 m-5 px-4 py-2'
      value={title} //two way binding 
      onChange={(e)=>{
        settitle(e.target.value)
      }}
      />
      <input type='text' placeholder='Enter Description Here' className='text-2xl border-blue-400
      border-4 m-5 px-4 py-2'
      value={desc} //two way binding
      onChange={(e)=>{
        setdesc(e.target.value)
      }}
      />

      <button className='bg-green-500 text-white px-4 py-3
      text-2xl font-bold rounded m-5'>Add Task</button>
    </form>

    <hr />
    <div className='p-8 bg-slate-200'>
      <ul>{renderTask}</ul>
    </div>

  </main>
  )
}

export default page