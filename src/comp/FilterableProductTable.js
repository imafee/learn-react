import React, { useState } from 'react';
import style from './FilterableProductTable.css';
/**
 * 可搜索、可筛选的表格
 * 需求：按类型归类展示、字符串匹配、复选框过滤掉无库存产品
 * 组件：
 * - 默认导出组件 FilterableProductTable
 *  - props: null
 *  - status: 搜索框的值、复选框的值、展示数据
 * - 搜索框组件 SearchBar
 * - 产品表格组件 ProductTable
 * 算法：
 */
let mock = [
  { category: 'Fruits', price: '$1', stocked: true, name: 'Apple', id: 0 },
  {
    category: 'Vegetables',
    price: '$2',
    stocked: true,
    name: 'Spinach',
    id: 1,
  },
  {
    category: 'Fruits',
    price: '$1',
    stocked: true,
    name: 'Dragonfruit',
    id: 2,
  },
  {
    category: 'Fruits',
    price: '$2',
    stocked: false,
    name: 'Passionfruit',
    id: 3,
  },
  {
    category: 'Vegetables',
    price: '$4',
    stocked: false,
    name: 'Pumpkin',
    id: 4,
  },
  { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas', id: 5 },
];

export default function FilterableProductTable() {
  const [data, setData] = useState(mock);
  const [toggleStocked, setToggleStocked] = useState(false);
  const [iptValue, setIptValue] = useState('');

  return (
    <div className="app">
      <SearchBar
        toggleStocked={toggleStocked}
        handleKeyUp={handleKeyUp}
        handleChange={handleChange}
      />
      <ProductTable data={data} />
    </div>
  );
  function handleKeyUp(e) {
    setIptValue(e.target.value);
    filterData(e.target.value, toggleStocked);
  }
  function handleChange(e) {
    setToggleStocked(!toggleStocked);
    filterData(iptValue, !toggleStocked);
  }
  function filterData(iptValue, toggleStocked) {
    let dt = mock.slice();
    dt = filterByName(dt, iptValue);
    dt = toggleStocked ? filterOutNoStock(dt) : dt;
    setData(dt);
  }
}
function SearchBar({ toggleStocked, handleKeyUp, handleChange }) {
  return (
    <div className="searchBar">
      <div className="search">
        <input type="text" onKeyUp={handleKeyUp} />
      </div>
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            checked={toggleStocked}
            onChange={handleChange}
          />
          only show products in stock
        </label>
      </div>
    </div>
  );
}
function ProductTable({ data }) {
  const group = Object.groupBy(data, ({ category }) => category);
  const keys = Object.keys(group);
  return (
    <div className="productTable">
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>category</th>
            <th>price</th>
            <th>stocked</th>
          </tr>
        </thead>
        <tbody>
          {keys.map((category, index) => (
            <React.Fragment key={category}>
              <ProductCategoryRow row={{ category }} />
              {group[category].map((product) => (
                <ProductRow key={product.id} row={product} />
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
function ProductCategoryRow({ row }) {
  const { category } = row;
  return (
    <tr>
      <td colSpan={4}>{category}</td>
    </tr>
  );
}
function ProductRow({ row }) {
  const { id, name, price, stocked, category } = row;
  return (
    <tr>
      <td>{name}</td>
      <td>{category}</td>
      <td>{price}</td>
      <td>{stocked ? 'true' : 'false'}</td>
    </tr>
  );
}
function filterOutNoStock(data) {
  return data.filter((element) => element.stocked);
}
function strMatched(str, refStr) {
  return str.toLowerCase().includes(refStr.toLowerCase());
}
function filterByName(data, refStr) {
  return data.filter((element, index) => strMatched(element.name, refStr));
}
