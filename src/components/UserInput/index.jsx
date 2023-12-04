import React, { useState } from 'react';

const UserInput = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={inputValue}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default UserInput;
