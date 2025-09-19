import React from 'react'

const Table = () => {
const num = 134;    
const rows = Array.from({length:10},(_,i)=>i+1)
console.log(rows);

  return (
    <>
    <ul>
        {rows.map((i)=>(
            <li key={i}>
                {num}*{i}={num*i}
            </li>
        ))}
    </ul>

    </>
  )
}

export default Table