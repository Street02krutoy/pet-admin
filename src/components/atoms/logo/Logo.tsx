import React from 'react';
import logo from '../../atoms/icons/LogoIcon/img.png'

const Logo = () => {
    return (
        <div className='w-14 h-auto flex place-items-center gap-1'>
            <img className='transition object-cover h-full w-full' src={logo} alt="hz"/>
            <h4 className='font-bold text-xl bg-gradient-to-r from-dark-violet to-violet text-transparent bg-clip-text'>Мой питомец</h4>
        </div>
    );
};

export default Logo;