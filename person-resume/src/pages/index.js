import { Button } from 'antd-mobile';
import router from 'umi/router';
import styles from './index.css';
import Link from 'umi/link';
import dynamic from 'umi/dynamic';
import person from '../data/person.js';

export default function (ctx) {
  let query = ctx.location.query;//获取入参信息
  let config = {}
  console.log(person.name)
  config.name = query.name ? query.name : "guest"
  //return 返回的是一个temp
  return (
    <div>
      <h1>{person.name}</h1>
    </div>
  );
}