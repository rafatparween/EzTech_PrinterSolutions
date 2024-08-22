

import React from 'react';
import './drivers.css';

function Drivers() {
    return (
        <div className="container-box">
            <div className="form-container">
                <div className="form-header">
                    <h2>Download Printer Drivers</h2>
                </div>
                <div className="form-body">
                    <input
                        type="text"
                        placeholder="Ex: Model XXX-XXXX"
                        className="input-field"
                    />
                    <input
                        type="text"
                        placeholder="Ex: Jane Doe"
                        className="input-field"
                    />
                    <input
                        type="text"
                        placeholder="Ex: 604 377-8284"
                        className="input-field"
                    />
                    <button className="find-button">Find Drivers</button>
                </div>
            </div>
            <div className="image-container">
                <div className="help-text">
                    <p>How to find printer model number?</p>
                    <span>The product name is on the front of your device.</span>
                </div>
                <img
                    src="printer.png" 
                    alt="Printer"
                    className="printer-image"
                />
            </div>
        </div>
    );
}

export default Drivers;
