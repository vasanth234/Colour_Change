import React from 'react'
import {useState} from 'react'

export default function Dino(){
    const [typeofColour,setType]=useState('hex');
    const [color ,setColor]=useState('#000000')
    function Genert(length){
        return Math.floor(Math.random()*length)
    }
    function handlecreatehexcolour(){
        let conum=[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
        let sign='#'
        for(let i=0;i<6;i++){
            sign+=conum[Genert(conum.length)]
        }
        console.log(sign);
        setColor(sign);
    }

    function handlecreatergbcolour(){
const r=Genert(256);
const g=Genert(256);
const b=Genert(256);
//for template literals we should use the backticks not the single ticks
setColor(`rgb${r}, ${g}, ${b}`);

    }

  return (
    <>
    <div style={{width:'100vw',height:'100vh',background:color}}>
        <center>
        <button onClick={()=>setType('hex')}>Create HEX colour</button>
        <button onClick={()=>setType('rgb')}>Create RGB colour</button>
        <button onClick={typeofColour === 'hex'? handlecreatehexcolour:handlecreatergbcolour}>Generate the colourr</button>
        <div style={{
            justifyContent:"center",
            alignItems:"center",
            color:"#fff",
            fontSize:"30px"
        }}>
            <h2>{typeofColour==='rgb'? 'RGB color':'HEX color'}</h2>
            <h2>{color}</h2>

        </div>
        </center>
    </div>
    </>
   
  );
}

