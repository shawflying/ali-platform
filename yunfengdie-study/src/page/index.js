import { Button } from 'antd-mobile';
import Link from 'umi/link';

export default function () {
  return (
    <div>
      <h1>Index Page</h1>
      <Link to="/list">
        <Button type="primary">跳转到列表页</Button>
      </Link>

      <Link to="/city">
        <Button type="primary">跳转到城市列表</Button>
      </Link>
    </div>
  );
}
