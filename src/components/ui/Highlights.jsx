import React from 'react';
import Highlights from '../Highlights';

const Hightlight = ({ icon, title, para }) => {
    return (
        <div className="highlights">
            <div className="highlight__img">
                {icon}
            </div>
             <h3 className="highlight__subtitle">{title}</h3>
            <p className="highlight__para">
                {para}
            </p>
        </div>
    );
        
};

export default Highlights;