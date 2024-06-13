"use client"
import React, { useState } from 'react';
import TaskList from './Components/TaskList';
import TaskForm from './Components/TaskForm';
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
            <TaskForm title = {title} desc = {desc} submitHandler = {submitHandler} setTitle = {setTitle} setDesc = {setDesc}/>
            <hr />
            <TaskList render = {renderTask}/>
        </>
    )
}

export default page;