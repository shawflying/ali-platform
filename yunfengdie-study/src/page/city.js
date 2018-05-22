import { Button } from 'antd-mobile';
import Link from 'umi/link';
import { Grid } from 'antd-mobile';
import city from "./city.css"
import router from 'umi/router';

const data = Array.from(new Array(9)).map((_val, i) => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `name${i}`,
}));

const data1 = Array.from(new Array(9)).map(() => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
}));
var hotCity = [
    { text: "北京", key: "bj" },
    { text: "上海", key: "sh" },
    { text: "苏州", key: "sz" },

    { text: "杭州", key: "hz" },
    { text: "成都", key: "cd" },
    { text: "武汉", key: "wh" },
    { text: "重庆", key: "chongqing" },
    { text: "天津", key: "tj" },
]
var B_City = [
    { text: "北京", key: "bj" },
]
var C_City = [
    { text: "成都", key: "cd" },
    // {text:"长春",key:"491"},
    // {text:"长沙",key:"401"},
    { text: "常州", key: "changzhou" },
    { text: "重庆", key: "chongqing" },

]
var D_City = [
    // {text:"大连",key:"178"},
    // {text:"东莞",key:"434"},

]

var F_City = [
    // {text:"佛山",key:"513"},
    // {text:"福州",key:"309"},

]
var G_City = [
    // {text:"贵阳",key:"614"},
    // {text:"广州",key:"6"},

]

var H_City = [
    // {text:"哈尔滨",key:"202"},
    // {text:"合肥",key:"283"},
    { text: "杭州", key: "hz" },
]

var J_City = [
    // {text:"济南",key:"269"},
    // {text:"金华",key:"910"},
]

var K_City = [
    // {text:"昆明",key:"546"},
]

var N_City = [
    //  {text:"南昌",key:"400"},
    // {text:"南宁",key:"582"},
    //  {text:"南通",key:"627"},
    // {text:"宁波",key:"250"},
    // {text:"南京",key:"100"},
]

var Q_City = [
    //  {text:"青岛",key:"171"},
    // {text:"泉州",key:"622"},
]

var S_City = [
    { text: "上海", key: "7" },
    // {text:"绍兴",key:"652"},
    // {text:"深圳",key:"137"},
    // {text:"石家庄",key:"519"},
    { text: "沈阳", key: "sy" },
    { text: "苏州", key: "sz" },
]

var T_City = [
    { text: "太原", key: "taiyuan" },
    // {text:"台州",key:"671"},
    // {text:"唐山",key:"639"},
    { text: "天津", key: "tj" },
    // {text:"泰州",key:"772"},
]

var W_City = [
    //  {text:"潍坊",key:"632"},
    // {text:"温州",key:"402"},
    { text: "武汉", key: "wh" },
    { text: "无锡", key: "wuxi" },
]

var X_City = [
    //  {text:"西安",key:"211"},
    // {text:"厦门",key:"243"},
    // {text:"湘潭",key:"1012"},
    // {text:"徐州",key:"722"},
]

var Y_City = [
    //  {text:"烟台",key:"476"},
]
var Z_City = [
    //  {text:"郑州",key:"184"},
]

export default function () {

    return (
        <div>
            <div className={city.title}>热门城市</div>
            <Grid data={hotCity}
                square={false}
                columnNum={4}
                onClick={(node) => {
                    let str = "./index?city=" + node.key + "&" + "page=1";
                    router.push(str);
                }}
                renderItem={dataItem => (
                    <div style={{ padding: '2.5px' }}>
                        <span>{dataItem.text}</span>
                    </div>
                )}
            />
            <div className={city.title}>B</div>
            <Grid data={B_City}
                square={false}
                columnNum={1}
                onClick={(node) => {
                    let str = "./index?city=" + node.key + "&" + "page=1";
                    router.push(str);
                }}
                renderItem={dataItem => (
                    <div style={{ paddingLeft: '1.5px' }}>
                        <div style={{ paddingLeft: "1px", width: "50px", height: "20px" }}>{dataItem.text}</div>
                    </div>
                )}
            />

            <div className={city.title}>C</div>
            <Grid data={C_City}
                square={false}
                columnNum={1}
                onClick={(node) => {
                    let str = "./index?city=" + node.key + "&" + "page=1";
                    router.push(str);
                }}
                renderItem={dataItem => (
                    <div style={{ paddingLeft: '1.5px' }}>
                        <div style={{ paddingLeft: "1px", width: "50px", height: "20px" }}>{dataItem.text}</div>
                    </div>
                )}
            />


            <div className={city.title}>H</div>
            <Grid data={H_City}
                square={false}
                columnNum={1}
                onClick={(node) => {
                    let str = "./index?city=" + node.key + "&" + "page=1";
                    router.push(str);
                }}
                renderItem={dataItem => (
                    <div style={{ paddingLeft: '1.5px' }}>
                        <div style={{ paddingLeft: "1px", width: "50px", height: "20px" }}>{dataItem.text}</div>
                    </div>
                )}
            />


            <div className={city.title}>S</div>
            <Grid data={S_City}
                square={false}
                columnNum={1}
                onClick={(node) => {
                    let str = "./index?city=" + node.key + "&" + "page=1";
                    router.push(str);
                }}
                renderItem={dataItem => (
                    <div style={{ paddingLeft: '1.5px' }}>
                        <div style={{ paddingLeft: "1px", width: "50px", height: "20px" }}>{dataItem.text}</div>
                    </div>
                )}
            />

            <div className={city.title}>T</div>
            <Grid data={T_City}
                square={false}
                columnNum={1}
                onClick={(node) => {
                    let str = "./index?city=" + node.key + "&" + "page=1";
                    router.push(str);
                }}
                renderItem={dataItem => (
                    <div style={{ paddingLeft: '1.5px' }}>
                        <div style={{ paddingLeft: "1px", width: "50px", height: "20px" }}>{dataItem.text}</div>
                    </div>
                )}
            />

            <div className={city.title}>W</div>
            <Grid data={W_City}
                square={false}
                columnNum={1}
                onClick={(node) => {
                    let str = "./index?city=" + node.key + "&" + "page=1";
                    router.push(str);
                }}
                renderItem={dataItem => (
                    <div style={{ paddingLeft: '1.5px' }}>
                        <div style={{ paddingLeft: "1px", width: "50px", height: "20px" }}>{dataItem.text}</div>
                    </div>
                )}
            />


            <Grid data={X_City}
                square={false}
                columnNum={1}
                onClick={(node) => {
                    console.log("===", node.key)
                }}
                renderItem={dataItem => (
                    <div style={{ paddingLeft: '1.5px' }}>
                        <div style={{ paddingLeft: "1px", width: "50px", height: "20px" }}>{dataItem.text}</div>
                    </div>
                )}
            />


            <Grid data={Y_City}
                square={false}
                columnNum={1}
                onClick={(node) => {
                    console.log("===", node.key)
                }}
                renderItem={dataItem => (
                    <div style={{ paddingLeft: '1.5px' }}>
                        <div style={{ paddingLeft: "1px", width: "50px", height: "20px" }}>{dataItem.text}</div>
                    </div>
                )}
            />

            <Grid data={Z_City}
                square={false}
                columnNum={1}
                onClick={(node) => {
                    console.log("===", node.key)
                }}
                renderItem={dataItem => (
                    <div style={{ paddingLeft: '1.5px' }}>
                        <div style={{ paddingLeft: "1px", width: "50px", height: "20px" }}>{dataItem.text}</div>
                    </div>
                )}
            />
        </div>
    );
}
