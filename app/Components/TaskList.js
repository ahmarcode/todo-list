import React from 'react';

const TaskList = ({ render }) => {
    return (
        <div className='bg-gray-200'>
            <ul>
                {render}
            </ul>
        </div>
    );
};

export default TaskList;
