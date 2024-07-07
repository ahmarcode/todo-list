"use client"
import React, { useState } from 'react';
import TaskList from './Components/TaskList';
import TaskForm from './Components/TaskForm';

const Page = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [mainTask, setMainTask] = useState([]);

    const submitHandler = (e) => {
        setMainTask([...mainTask, { title, desc }]);
        setTitle("");
        setDesc("");
    };

    const deleteHandler = (i) => {
        let copyTask = [...mainTask];
        copyTask.splice(i, 1);
        setMainTask(copyTask);
    };

    let renderTask = <h2 className="text-center mt-5 text-gray-600">No Task Available</h2>;
    if (mainTask.length > 0) {
        renderTask = mainTask.map((t, i) => (
            <li key={i} className="flex flex-col sm:flex-row items-center justify-between mb-4 w-full bg-white shadow p-4 rounded-lg">
                <div className="flex flex-col sm:flex-row justify-between w-full sm:w-3/4">
                    <h5 className="text-xl font-semibold text-gray-800">{t.title}</h5>
                    <h6 className="text-base font-medium text-gray-600 mt-2 sm:mt-0">{t.desc}</h6>
                </div>
                <button
                    onClick={() => deleteHandler(i)}
                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded font-bold mt-4 sm:mt-0 sm:ml-4"
                >
                    Delete
                </button>
            </li>
        ));
    }

    return (
        <>
            <div className='flex justify-center align-middle container mx-auto'></div>
            <div className=" text-4xl text-center bg-blue-400 text-white pt-4 pb-4 mr-[-20px]">
                My Todo-List
            </div>

            <div className="container mx-auto ml-2">
                <TaskForm
                    title={title}
                    desc={desc}
                    submitHandler={submitHandler}
                    setTitle={setTitle}
                    setDesc={setDesc}
                />
                <hr className="my-4 border-gray-300" />
                <ul>
                    {renderTask}
                </ul>
            </div>
        </>
    );
};

export default Page;
