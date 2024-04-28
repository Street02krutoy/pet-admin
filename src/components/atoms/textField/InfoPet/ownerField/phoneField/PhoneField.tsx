import React from 'react';

const PhoneField = () => {
    return (
        <div className="mb-2 mt-2">
            <input type="tel"
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-black dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   placeholder="+7 998 573-81-90" required/>
        </div>
    );
};

export default PhoneField;