// 实现一个点击事件
import { join } from 'lodash';
import './click2print.css';
export function comp() {
  const element = document.createElement('div');
  element.id = 'click2print';
  element.className = 'click2print';

  const btn = document.createElement('button');
  element.innerHTML = join(['demo:', 'event'], ' ');
  btn.innerHTML = 'Click me and check the console!!';
  btn.onclick = function printMe() {
    console.log('I get called from print.js!');
  };

  element.appendChild(btn);
  console.log(element);
  return element;
}
