import React from 'react';
import { TEInput } from "tw-elements-react";

const PasswordField = () => {
    return (
            <div className="mb-6">
                <input type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="password" required/>
            </div>
    );
};

export default PasswordField;