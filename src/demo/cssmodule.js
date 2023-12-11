import styles from './cssmodule.css';

console.log(styles);
export function comp() {
  // 使用生成的哈希类名
  const element = document.createElement('div');
  element.classList.add(styles.myClass);
  element.innerHTML = `
  <span>cssmodules</span>
  <ul>
    <li class="${styles.item}">item1</li>
    <li class="${styles.item}">item2</li>
  </ul>`;
  document.body.appendChild(element);
}
