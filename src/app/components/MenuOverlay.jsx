import React from 'react';

const MenuOverlay = ({ links }) => {
    const handleClick = (href) => {
        if(href=="/") return;
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <ul className={'flex flex-col py-4 items-center'}>
            {links.map((link, index) => (
                <li key={index}>
                    <button
                        onClick={() => handleClick(link.href)}
                        className={'block py-2 pl-3 pr-4 md:p-0 text-[#ADB7BE] sm:text-xl rounded hover:text-white focus:outline-none'}
                    >
                        {link.title}
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default MenuOverlay;
