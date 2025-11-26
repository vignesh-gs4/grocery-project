import React, { useState } from 'react'

const Dbt1 = () => {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleCount = doubleNumber(count);

  const themeStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black"
  };

  return (
    <div style={themeStyle}>
      <input type="number" value={count} onChange={(e) => setCount(e.target.value)} />
      <p>{doubleCount}</p>
      <button onClick={() => setDark(prev => !prev)}>theme</button>
    </div>
  )
}

const doubleNumber = (count) => {
    console.log("function called")
    return count * 2;
  }

export default Dbt1