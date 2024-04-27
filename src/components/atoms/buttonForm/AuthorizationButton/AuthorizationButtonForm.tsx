import React from 'react';

const AuthorizationButtonForm = ({children}:any) => {
    return (
        <button className="w-20 bg-violet hover:bg-violet
        text-white font-bold py-2 px-4 border border-black hover:border-transparent rounded">
            {children}
        </button>
    );
};

export default AuthorizationButtonForm;