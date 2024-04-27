import React from 'react';

const MessageField = () => {
    return (
        <div className="relative w-[32rem] mt-4 mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your message</label>
            <textarea className="block row-4 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."/>
        </div>
    );
};

export default MessageField;