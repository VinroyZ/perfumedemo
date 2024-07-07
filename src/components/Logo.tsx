import React from 'react';
import mainLogo from './assets/logoPerfume.png';

const Logo = () => {
    return <div className="logo w-16 h-16">
        <img src={mainLogo} alt="logo" />
    </div>;
};

export default Logo;