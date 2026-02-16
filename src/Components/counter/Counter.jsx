import React, {  useEffect, useState } from 'react';


export default function Counter( ) {
  const [num,setNum]=useState(0);
  
  const increase = () => {
    if (num < 16) {
      setNum(prev => prev + 2);
    }
  };
  const decrease =() => setNum(prev => prev -1);
  const reset =() => setNum(0);

  useEffect(() => {
    if (num === 10 ){
      alert("Ten number")
    }

  }, [num])

  

  return (
    <div className='counter' >
        <button className="btn-action" onClick={ increase}> + </button>
        <span> {num} </span>
        <button className="btn-action" disabled={num === 0 } onClick={decrease}> - </button>
        <button className="reset" onClick={reset}> Reset</button>
        <p> {num === 10 ? 'وصلت 10!' : ''} </p>
    </div>
  )
}
