// SoundControls.jsx
import React from 'react';

const SoundControls = ({ isPlaying, playPauseSound, stopSound, handleSave, setIsDrawingListVisible }) => {
    return (
        <div>
            <button className="logo-btn" onClick={() => setIsDrawingListVisible(true)}>Logo Button</button>
            <button onClick={playPauseSound}>{isPlaying ? "Pause Sound" : "Play Sound"}</button>
            <button onClick={stopSound}>Stop Sound</button>
            <button onClick={handleSave}>Save Drawing</button>
        </div>
    );
};

export default SoundControls;
