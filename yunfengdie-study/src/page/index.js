import { Button } from 'antd-mobile';
import router from 'umi/router';
import styles from './index.css';
import Link from 'umi/link';
import dynamic from 'umi/dynamic';

export default function () {
    const App1 = dynamic(() => {
        return new Promise((resolve) => {
            resolve(() => {
                return (
                    <div>
                        <p>app1</p>
                    </div>
                )
            })
        })
    })
    //组件
    const App2 = dynamic(() => {
        return new Promise((resolve) => {
            resolve(() => {
                return (
                    <div>
                        <p>app2</p>
                    </div>
                )
            })
        })
    })
    let config = { name: '张三' }
    //return 返回的是一个temp
    return (
        <div>
            <h1> hello world</h1>
            <Link to="/city">
                <Button className={styles.city}>访问城市列表</Button>
            </Link>
            <Link to="/404?name=admin">
                <Button className={styles['primary-color']}>404</Button>
            </Link>
            <Link to="/alert">
                <Button className={styles['primary-color']}>alert</Button>
            </Link>
            <Button
                data={"张三"}
                onClick={(e) => {
                    router.push(`./city`);
                }} >点击router.push 跳转城市列表</Button>
            <Button
                data={config.name}
                data-id={1}
                onClick={(e) => {
                    let name = e.currentTarget.getAttribute("data");
                    console.log(e.altKey)
                    console.log(e.button.toString())
                    console.log('2222', e.target)
                    console.log("-----", e.currentTarget.getAttribute("data"))
                    console.log("-----", e.currentTarget.getAttribute('data-id'))
                    console.log("按钮上的文字暂时无法获取")
                }}>
                获取点击按钮的参数
            </Button>
            <App1 />
            <App2 />
        </div>
    )
}