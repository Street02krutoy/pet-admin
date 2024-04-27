import React from 'react';

const SendMessageButtonForm = ({onClick, children}:any) => {
    return (
        <button onClick={onClick} className="w-30 bg-violet hover:bg-violet
        text-white font-bold py-2 px-4 border border-black hover:border-transparent rounded-xl">
            {children}
        </button>
    );
};

export default SendMessageButtonForm;