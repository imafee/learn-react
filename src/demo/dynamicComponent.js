// 预请求和预加载
export function lazyload() {
  import(/* webpackPrefetch: true */ '@demo/dynamicComponent-mod1.js');
  import(/* webpackPreload: true */ '@demo/dynamicComponent-mod2.js');
}
