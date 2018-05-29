import { Button } from 'antd-mobile';
import router from 'umi/router';
import styles from './index.css';
import Link from 'umi/link';
import dynamic from 'umi/dynamic';

export default function (ctx) {
  console.log("上下文：", ctx);
  console.log("页面传参：", ctx.location.query);
  //return 返回的是一个temp
  return (
    <div>
      <h1> hello world</h1>
      <Button
        onClick={(e) => {
          router.goBack();
        }}
      >返回上一页</Button>
    </div>
  )
}