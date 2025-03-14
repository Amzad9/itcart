import React from 'react';

const SliderContent = ({ title, subtitle, children, className }) => {
    return (
        <div className={`flex items-center justify-start ${className}`}>
            <div className="px-4 md:px-10 max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-5">{title}</h1>
                <p className="text-base md:text-lg mb-5 max-w-md">{subtitle}</p>
                {children}
            </div>
        </div>
    )
}

export default SliderContent;
