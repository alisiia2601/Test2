import React, { useState } from 'react';

const PokemonInput = ({ onNameChange, dataTestId }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    onNameChange && onNameChange(inputValue);
    setInputValue('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter new name"
        value={inputValue}
        onChange={handleChange}
        data-testid={dataTestId}
      />
      <button onClick={handleSubmit}>Change Name</button>
    </div>
  );
};

export default PokemonInput;
