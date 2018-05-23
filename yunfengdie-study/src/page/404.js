import { Button } from 'antd-mobile';
import router from 'umi/router';
import styles from './index.css';
import Link from 'umi/link';
import dynamic from 'umi/dynamic';

export default function () {
    //return 返回的是一个temp
    return (
        <div>
            <h1> hello 404</h1>
            <Link to="/city">
                <Button
                    className={styles.city}
                    onClick={(e) => {
                        router.goBack();
                    }}

                >返回上一页</Button>
            </Link>
        </div>
    )
}