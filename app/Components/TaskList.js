"use client"
import React from 'react';

const TaskList = (props) => {
    return (
        <>
        <div className='p-8 bg-slate-50000'>
                <ul>
                    {props.render}
                </ul>
            </div>
        </>
    )
}

export default TaskList;