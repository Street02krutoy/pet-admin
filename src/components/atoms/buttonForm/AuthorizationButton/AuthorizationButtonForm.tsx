import React from 'react';

const AuthorizationButtonForm = ({onClick,children}:any) => {
    return (
        <button onClick={onClick} className="w-40 bg-violet hover:bg-violet
        text-white font-bold py-2 px-4 border border-black hover:border-transparent rounded-xl">
            {children}
        </button>
    );
};

export default AuthorizationButtonForm;