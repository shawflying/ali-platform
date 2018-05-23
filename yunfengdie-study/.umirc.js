export default {
  "pages": {
    "/": { context: { title: '首页名称-admin' } },
    "/index": { context: { title: '首页名称-admin' } },
  },
  context: {
    title: 'Unnamed Page'
  },
  exportStatic: {
    htmlSuffix: true,
  },
  disableServiceWorker: true,
};