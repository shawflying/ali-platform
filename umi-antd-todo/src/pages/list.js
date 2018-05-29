import { Button } from 'antd-mobile';
import router from 'umi/router';
import styles from './index.css';
import Link from 'umi/link';
import dynamic from 'umi/dynamic';

export default function (ctx) {
  let query = ctx.location.query;//获取入参信息
  let config = {}
  config.name = query.name ? query.name : "page list"
  //return 返回的是一个temp
  return (
    <div>
      <h1>{config.name}</h1>

      <Button
        onClick={(e) => {
          router.push('/tabbar-list?v=' + new Date().getTime());
        }}
      >tabbar-list </Button>
      <Link to='/tabbar'>
        <Button>tabbar</Button>
      </Link>
    </div>
  )
}