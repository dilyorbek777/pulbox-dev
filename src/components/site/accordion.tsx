import React, { useState } from 'react';

function Accordion({ title, content }: { title: string; content: string }) {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className="accordion">
            <div className="accordion-item">
                <div
                    className="accordion-title"
                    onClick={() => setIsActive(!isActive)}
                >
                    <div>{title}</div>
                    <div>{isActive ? '-' : '+'}</div>
                </div>
                {isActive && <div className="accordion-content">{content}</div>}
            </div>
        </div>
    )
}

export default Accordion