import React from 'react';
import Logo from '../../atoms/logo/Logo';
const Header = () => {
    return (
        <header className='bg-white top-0 z-50 fixed w-full'>
            <div className='w-full shadow'>
                <div className='w-3/4 mx-auto py-5 flex justify-between items-center'>
                    <Logo/>
                </div>
            </div>
        </header>
    );
};

export default Header;