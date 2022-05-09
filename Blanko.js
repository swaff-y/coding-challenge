import React, { useEffect, useState } from "react";
import { words } from "../data";
import styled from "styled-components";
import BlancoInput from "./BlancoInput";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-betwwen;
`

const Div = styled.div`
  width: 20px;
  height: 20px;
  border: ${props=>props.border};
  text-align: center;
`

export default function Blanko() {
  const [wordArr, setWordArr ] = useState(words[Math.floor(Math.random() * words.length)].split(""));
  const [picks, setPicks ] = useState([]);

  useEffect(()=>{
    const arr = [];

    let i = 0;
    while(arr.length <= 2){
      const num = Math.floor(Math.random() * (words.length));
      if(!arr.find(item=> (item && (item === num)))){
        arr[i] = num;
        i++
      }
    }

    setPicks(arr);
  },[words])

  return (
    <Container className="Blanko">
      {
        wordArr.map((char,index)=>(
          (picks.find(elm=>elm===index) === undefined)
          ?
          <Div 
            key={index}
            border={char === " " ? "none" : "1px solid black"}
          >
            {char}
          </Div>
          :
          <BlancoInput
            key={index}
            sentValue={ char }
          />
        ))
      }
    </Container>
    );
}
