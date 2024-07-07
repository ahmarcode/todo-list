"use client"
import React, { useState, useEffect } from 'react';
import TaskForm from './Components/TaskForm';

const Page = () => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [mainTask, setMainTask] = useState([]);

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setMainTask(storedTasks);
    }, []);

    const saveTasksToLocal = (tasks) => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (!title.trim() || !desc.trim()) return; // Basic validation

        const newTask = { title, desc };
        const updatedTasks = [...mainTask, newTask];
        setMainTask(updatedTasks);
        saveTasksToLocal(updatedTasks);

        setTitle('');
        setDesc('');
    };

    const deleteHandler = (index) => {
        const updatedTasks = [...mainTask];
        updatedTasks.splice(index, 1);
        setMainTask(updatedTasks);
        saveTasksToLocal(updatedTasks);
    };

    return (
        <>
            <h1 className="text-4xl font-bold text-center pt-4 pb-4 text-gray-900 mb-8">Welcome to Our Website</h1>

            <div className="container mx-auto ml-2">
                <TaskForm
                    title={title}
                    desc={desc}
                    submitHandler={submitHandler}
                    setTitle={setTitle}
                    setDesc={setDesc}
                />
                <hr />
                {mainTask.length === 0 ? (
                    <h2 className="text-center mt-5 text-gray-600">No Tasks Available</h2>
                ) : (
                    <ul>
                        {mainTask.map((task, index) => (
                            <li
                                key={index}
                                className="flex flex-col sm:flex-row items-center justify-between mb-4 w-full bg-white shadow p-4 rounded-lg"
                            >
                                <div className="flex flex-col sm:flex-row justify-between w-full sm:w-3/4">
                                    <h5 className="text-xl font-semibold text-gray-800">{task.title}</h5>
                                    <h6 className="text-base font-medium text-gray-600 mt-2 sm:mt-0">{task.desc}</h6>
                                </div>
                                <button
                                    onClick={() => deleteHandler(index)}
                                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded font-bold mt-4 sm:mt-0 sm:ml-4"
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
};

export default Page;
