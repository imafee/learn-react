// https://prettier.io/docs/en/options

/** @type {import("prettier").Config} */
const config = {
  // printWidth: 80, // 每行字符数最大长度，对应editorconfig中的max_line_length=80
  // useTabs: false, // 是否使用tab缩进，对应editorconfig中的indent_style=space
  // tabWidtsh: 2, // 若不使用tab锁进则tab缩进的空格数，对应editorconfig中的indent_size=2
  // endOfLine: 'lf', // 换行符，对应editorconfig中的end_of_line=lf
  semi: true, // 句末使用分号
  singleQuote: true, // 字符串使用单引号
  quoteProps: 'as-needed', // 对象属性是否需要引号括起来
  jsxSingleQuote: false, // Use single quotes instead of double quotes in JSX.
  trailingComma: 'all', // 尾部逗号，在多行逗号分隔的句法结构中，尽可能打印尾随逗号
  bracketSpacing: true, // 打印对象文字中括号之间的空格。
  bracketSameLine: false, // 闭合标签符号是否强制换行
  singleAttributePerLine: false, // 是否每个属性单独一行
  arrowParens: 'always', // 箭头函数参数只有一个时，强制使用括号。
  htmlWhitespaceSensitivity: 'css', // html文件的空白符敏感度。css(以 CSS 的 display 属性为准),strict(空白字符敏感),ignore(空白字符不敏感)
  vueIndentScriptAndStyle: false, // 缩进vue SFC文件的script和style标签
  embeddedLanguageFormatting: 'auto', // 嵌入式语言的格式化
};

export default config;
