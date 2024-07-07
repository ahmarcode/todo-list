"use client"
import React from 'react';

const TaskForm = (props) => {
    return (
        <>
            <form action={props.submitHandler}>
                <div className='flex justify-center flex-wrap'>
                <input type='text' className='text-2xl border-black border-2 m-3 py-2' placeholder='Enter Title Here' value={props.title} onChange={(elem) => {
                    props.setTitle(elem.target.value);
                }}></input>

                <input type='text' className='text-2xl border-black border-2 m-3 py-2' placeholder='Title Description' value={props.desc} onChange={(elem) => {
                    props.setDesc(elem.target.value);
                }}></input>
                </div>
                <br/>
                <div className='flex justify-center'>
                <button type='submit' className='flex justify-center text-2xl bg-black text-white px-4 py-3 rounded m-5'>Add Task </button>
                </div>
            </form>
        </>
    )
}

export default TaskForm;