# react@18

## Intro

- 为什么会有前端框架？
- react和vue的对比？
- 什么是组件
  - React 应用程序由组件组成。
  - 组件是 UI（用户界面）的一部分，具有自己的逻辑和外观。 可以小到一个按钮，也可以大到整个页面。
- 怎么写组件
  - react组件通常以大写字母开头，以此区别于html标签。
  - 组件的根标签如果是多个那么必须使用`<></>`来包裹起来
  - 根组件使用 default 关键字导出(export default)
    - 使用数据时，变量`{user.name}`、字面量`\{\{'name':'imafee'\}\}`
    - 使用表达式时，三元表达式`{env? 'dev':'prod'}`、条件变量`{condition}`、短路`expA && expB`
  - 使用jsx语法来书写标签(markup)
  - 使用className属性来制定样式类
  - 列表，key属性设置为一个唯一值
  - 事件
- hooks
  - 以use开头的函数称为hook
  - hook函数的使用有限制性，只能在组件顶部调用 Hooks；如果您想在条件或循环中使用 useState，请提取一个新组件并将其放在那里
  - 函数组件中使用useState(value) hook来创建状态和改变状态
  - useState创建的状态，在每一个组件实例中都是唯一的

## Describing the UI

## Adding Interactivity

## Managing State

## Escape Hatches
