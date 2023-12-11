// 实现一个资源文件的加载

import myImage from '@asset/image/avatar-1.jpg';
import data_xml from '@asset/data/data.xml';
import data_csv from '@asset/data/data.csv';
import data_jsonc from '@asset/data/data.json';

const node = document.createElement('div');
node.id = 'loadAssets';
document.body.appendChild(node);

// 加载图片
const img = new Image();
img.src = myImage;
node.appendChild(img);

// 加载字体
{
  const node_title = document.createElement('div');
  node_title.classList.add('title');
  node_title.innerText = 'font';
  node.appendChild(node_title);
}

// 加载其他文件
console.log('xml:', data_xml);
console.log('csv:', data_csv);
console.log('jsonc:', data_jsonc);
