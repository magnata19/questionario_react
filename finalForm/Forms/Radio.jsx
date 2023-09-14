import React from "react";

const Radio = ({ pergunta, options, id, value, onChange, active }) => {
  if(active === false) return null
  return (
    <fieldset style={{marginBottom: '1rem'}}>
      <legend style={{fontWeight:'bold'}}>{pergunta}</legend>
      {options.map((option) => (
        <label
        style={{fontFamily: 'monospace'}}
        key={option}>
          <input         
          type="radio" 
          value={option}
          checked={value === option}
          id={id}
          onChange={onChange}
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
};

export default Radio;
