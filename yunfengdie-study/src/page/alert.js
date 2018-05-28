import { Toast, WhiteSpace, WingBlank, Button, Modal } from 'antd-mobile';
import router from 'umi/router';
import styles from './index.css';
import Link from 'umi/link';
import dynamic from 'umi/dynamic';

export default function () {
    //return 返回的是一个temp
    return (
        <div>
            <h1>测试弹层页面</h1>
            <Button
                className={styles.city}
                onClick={(e) => {
                    setTimeout(() => {
                        Toast.hide()
                        Toast.fail("失败了。。。。")
                    }, 2000);
                    Toast.success("恭喜您提交成功", 10, function (e) {
                        console.log("成功后回调！")
                        Toast.info('This is a toast tips !!!', 1, function () {
                            Toast.loading("loading...", 1)
                        });//三秒后，弹出
                    }, true)
                }}

            >点击弹出框-Toast</Button>

            <Button
                className={styles.city}
                onClick={(e) => {
                    // Modal.alert("温馨提示", "恭喜您");

                    // Modal.prompt("温馨提示2",'给您到喜啦！');
                }}

            >点击弹出框-Modal</Button>
        </div>
    )
}