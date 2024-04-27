import React from 'react';

const SendMessageButtonForm = ({children}:any) => {
    return (
        <button className="w-30 bg-violet hover:bg-violet
        text-white font-bold py-2 px-4 border border-black hover:border-transparent rounded">
            {children}
        </button>
    );
};

export default SendMessageButtonForm;