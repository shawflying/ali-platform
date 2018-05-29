import { Button } from "antd-mobile"
import router from 'umi/router';
export default function (ctx) {

  return (
    <div>
      <h1>关于这个项目</h1>
      <Button
        onClick={(e) => {
          router.goBack();
        }}
      >返回上一页</Button>
    </div>
  );
}