import { Button } from 'antd-mobile';
import router from 'umi/router';
import styles from './index.css';
import Link from 'umi/link';
import dynamic from 'umi/dynamic';

export default function (ctx) {
  let query = ctx.location.query;//获取入参信息
  let config = {}
  config.name = query.name ? query.name : "guest"
  //return 返回的是一个temp
  return (
    <div>
      <h1> hello {config.name}</h1>
      <Button
        data={config.name}
        data-id={1}
        onClick={(e) => {
          let name = e.currentTarget.getAttribute("data");
          console.log(e.altKey)
          console.log("name:", name)
          console.log(e.button.toString())
          console.log('2222', e.target)
          console.log("-----", e.currentTarget.getAttribute("data"))
          console.log("-----", e.currentTarget.getAttribute('data-id'))
          console.log("按钮上的文字暂时无法获取")
        }}>
        获取点击按钮的参数
            </Button>


      <Button
        onClick={(e) => {
          router.push('/about?v=' + new Date().getTime());
        }}
      >关于项目</Button>
    </div>
  )
}