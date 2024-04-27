import React from 'react';

const ListForm = ({children}:any) => {
    return (
        <div className="w-full bg-gray-300 hover:bg-gray-300
    text-white font-bold py-2 px-4 border border-black hover:border-transparent rounded-xl">
            {children}
        </div>
    );
};

export default ListForm;