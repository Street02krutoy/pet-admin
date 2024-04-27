import React from 'react';

const PhoneField = () => {
    return (
        <div className="mb-2 mt-2">
            <input type="tel"
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   placeholder="+7 000 000-00-00" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
        </div>
    );
};

export default PhoneField;