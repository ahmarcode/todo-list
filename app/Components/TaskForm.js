import React from 'react';

const TaskForm = ({ title, desc, submitHandler, setTitle, setDesc }) => {
    return (
        <form onSubmit={submitHandler} className="mb-4">
            <div className='flex justify-center flex-wrap'>
                <input
                    type='text'
                    className='text-2xl border-black border-2 m-3 py-2'
                    placeholder='Enter Title Here'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type='text'
                    className='text-2xl border-black border-2 m-3 py-2'
                    placeholder='Enter Description Here'
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                />
            </div>
            <div className='flex justify-center'>
                <button type='submit' className='flex justify-center text-2xl bg-black text-white px-4 py-3 rounded m-5'>
                    Add Task
                </button>
            </div>
        </form>
    );
};

export default TaskForm;
