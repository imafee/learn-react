import React, { useState } from 'react';

export default function Comp() {
  return (
    <>
      <h2>data no shared</h2>
      <MyButton />
      <MyButton />
    </>
  );
}
function MyButton() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <button onClick={handleClick}>clicked {count} times</button>
    </>
  );
}
