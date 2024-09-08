import React from "react";
import './Input.scss'

const InputComponent: React.FC = () => {
    return (
        <input 
      type="text" 
      className="search-input"
      placeholder="Vyhledat město..."
      aria-label="pole pro zádání města"
    />
    )
}

export default InputComponent;