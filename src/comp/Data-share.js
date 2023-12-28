import React, { useState } from 'react';

export default function Comp() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <h2>data shared</h2>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </>
  );
}
function MyButton({ count, onClick }) {
  return (
    <>
      <button onClick={onClick}>clicked {count} times</button>
    </>
  );
}
