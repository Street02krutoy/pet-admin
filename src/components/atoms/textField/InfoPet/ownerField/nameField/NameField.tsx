import React from 'react';

const NameField = () => {
    return (
        <div className="mb-2 mt-2">
            <input
                className="bg-white border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-black dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Иванов А.С." required/>
        </div>
    );
};

export default NameField;