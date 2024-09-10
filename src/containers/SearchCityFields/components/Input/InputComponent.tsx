import React from 'react';
import './Input.scss';

interface InputComponentProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
  onSelect: (value: string) => void;
}

const InputComponent: React.FC<InputComponentProps> = ({
  value,
  onChange,
  onClear,
  onSelect,
}) => {
  return (
    <div className="input-wrapper">
      <input
        type="search"
        className="search-input"
        placeholder="Vyhledat město..."
        aria-label="pole pro zádání města"
        value={value}
        onChange={onChange}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            onSelect(value);
          }
        }}
        tabIndex={0}
      />
      {value && (
        <button
          className="clear-button"
          onClick={onClear}
          aria-label="Vymazat vyhledávání"
        >
          &times;
        </button>
      )}
    </div>
  );
};

export default InputComponent;
