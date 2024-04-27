import React from 'react';

const DopField = () => {
    return (
        <div className="relative w-[32rem] mb-2 mt-2">
            <textarea className="block row-4 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400
            dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="особые приметы например, клеймо, номер электронного чипа и т. д."/>
        </div>
    );
};

export default DopField;