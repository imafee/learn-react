/**
 * 需求：
 * - components, props, and state
 * - time travel(时间旅行)
 * - 业务实现
 * 实现：
 * - 组件拆分：App(Game)、Board、Cell
 * - 状态设计和分布
 * - 算法
 */
import React, { useState } from 'react';
import style from './Tic-tac-toe2.css';

/**
 * Cell {Number|Null}  0初始值，1:'X'，2:'O'
 */
export default function Game() {
  const [cells, setCells] = useState(Array(9).fill(0));
  return <Board cells={cells} setCells={setCells} />;
}
function Board({ cells, setCells }) {
  function handleClick(index) {
    let anotherCells = cells.slice();
    anotherCells[index] = 1;
    setCells(anotherCells);
  }
  const winner = calcWinner(cells);
  return (
    <>
      <p>{winner === 0 ? '还没有胜利者' : cellMap(winner)}</p>
      <ol className={style.board}>
        {cells.map((cell, index) => (
          <Cell value={cell} onClick={() => handleClick(index)} key={index} />
        ))}
      </ol>
    </>
  );
}
function Cell({ value, onClick }) {
  return (
    <li className={style.cell} onClick={onClick}>
      {cellMap(value)}
    </li>
  );
}
function cellMap(cell) {
  return ['-', 'X', 'O'][cell];
}
/**
 * 判赢
 * @param {Cell|Array} cells
 * @returns {Cell}
 */
function calcWinner(cells) {
  const rules = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0, j = null; i < rules.length; i++) {
    const areNumbersEqual = rules[i].every((index) => {
      if (index === 0) {
        j = cells[index];
        return true;
      }
      return j === cells[index];
    });
    if (areNumbersEqual) return cells[rules[i][0]];
  }
  return 0;
}
