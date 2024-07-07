import React from 'react';
import Logo from "./Logo.tsx";
import Nav from "./Nav.tsx";

const Header = () => {
    return (
        <header className="bg-dark-bckground sticky top-0 z-[20] mx-auto flex w-full items-center justify-between border-b border-gray-500 p-8">
            <Logo />
            
            <h1>Header</h1>
        </header>
    );
};

export default Header;