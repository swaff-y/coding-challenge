import React, { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 20px;
  height: 20px;
  border: 1px solid black;
  text-align: center;
`

export default function BlancoInput({ sentValue }) {
    const [inputValue, setInputValue ] = useState('');
    const [border, setBorder ] = useState('1px solid black');

    const handleChange = (e) => {
        if(e.target.value.length > 1) return;
        setInputValue(e.target.value);
        if(sentValue === e.target.value){
            setBorder("1px solid green");
        } else {
            setBorder("1px solid red"); 
        }
    }

    return (
        <Input 
            value={inputValue} 
            onChange={handleChange}
            style={{ border }}
        />
    )
};