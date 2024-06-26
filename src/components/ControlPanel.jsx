
// ControlPanel.jsx
import React from 'react';

const ControlPanel = ({ setColor }) => {
    return (
        <div>
            <button onClick={() => setColor('red')} style={{ backgroundColor: 'red' }}>Red</button>
            <button onClick={() => setColor('yellow')} style={{ backgroundColor: 'yellow' }}>Yellow</button>
            <button onClick={() => setColor('green')} style={{ backgroundColor: 'green' }}>Green</button>
            <button onClick={() => setColor('blue')} style={{ backgroundColor: 'blue' }}>Blue</button>
        </div>
    );
};

export default ControlPanel;

