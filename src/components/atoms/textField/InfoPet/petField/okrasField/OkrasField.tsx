import React from 'react';

const OkrasField = () => {
    return (
        <div className="mb-2 mt-2">
            <input
                className="bg-white border border-black text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-black dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Белый" required/>
        </div>
    );
};

export default OkrasField;