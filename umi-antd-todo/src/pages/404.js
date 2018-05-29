import { Button } from 'antd-mobile';
import router from 'umi/router';
import Link from "umi/link";
import './index.css';//可以直接导入，不需要引用

export default function (ctx) {
  console.log("上下文：", ctx);
  console.log("页面传参：", ctx.location.query);
  //return 返回的是一个temp
  return (
    <div>
      <h1> hello world</h1>
      <Link to="/">
        <Button>返回上一页</Button>
      </Link>

    </div>
  )
}