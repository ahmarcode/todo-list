"use client"
import React, { useState } from 'react';
import { render } from 'react-dom';
const page = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [mainTask, setMainTask] = useState([]);
    const submitHandler = (e) => {
        setMainTask([...mainTask, { title, desc }]);
        console.log(title);
        console.log(desc);
        setTitle("");
        setDesc("");
        console.log(mainTask);
    };

    const deleteHandler = (i) => {
        let copyTask = [...mainTask]
        copyTask.splice(i,1);
        setMainTask(copyTask)
    }

    let renderTask = <h2>No Task Available</h2>
    if (mainTask.length > 0) {
        renderTask = mainTask.map((t, i) => {
            return <>
                <li key={i} className='flex items-center justify-between mb-8'>
                    <div className='flex justify-between mb-5 w-1/2'>
                        <h5 className='text-2xl font-semibold'>{t.title}</h5>
                        <h6 className='text-lg font-medium'>{t.desc}</h6>
                    </div>
                    <button onClick={() => {deleteHandler(i)}} className='bg-red-400 text-white py-4 px-2 rounded font-bold'>Delete</button>
                </li>
            </>
        })
    }

    return (
        <>
            <h1 className='bg-black text-white text-center font-bold p-5 text-4xl'>My Todo-List</h1>

            <form action={submitHandler}>
                <input type='text' className='text-2xl border-black border-4 m-8 px-4 py-2' placeholder='Enter Title Here' value={title} onChange={(elem) => {
                    setTitle(elem.target.value);
                }}></input>

                <input type='text' className='text-2xl border-black border-4 m-8 px-4 py-2' placeholder='Title Description' value={desc} onChange={(elem) => {
                    setDesc(elem.target.value);
                }}></input>

                <button type='submit' className='text-2xl bg-black text-white px-4 py-3 rounded m-5'>Add Task </button>
            </form>
            <hr />
            <div className='p-8 bg-slate-200'>
                <ul>
                    {renderTask}
                </ul>
            </div>
        </>
    )
}

export default page;