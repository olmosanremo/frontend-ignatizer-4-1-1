// SaveClearButtons.jsx
import React from 'react';

const SaveClearButtons = ({ clearDrawing, toggleEraseMode, isErasing }) => {
    return (
        <div className="save-clear">
            <button onClick={clearDrawing}>Clear Drawing</button>
            <button onClick={toggleEraseMode}>{isErasing ? "Switch to Draw" : "Switch to Erase"}</button>
        </div>
    );
};

export default SaveClearButtons;


