import { Grid } from 'antd-mobile';
import city from "./city.css"
import router from 'umi/router';
import dynamic from 'umi/dynamic';
import $ from 'jquery';

const zm_list = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
];



export default function () {
    const App = dynamic(() => {
        return new Promise((resolve) => {
            $.getJSON("http://m.daoxila.com/GongJu/city/list?type=all", function (res) {
                if (res.code !== "0") {
                    return;//获取信息失败
                }
                let list = res.data;
                let all_list = {}
                let hot_list = [];
                list
                    .sort(function (a, b) {
                        var s = a.shortName.toLowerCase();
                        var t = b.shortName.toLowerCase();
                        if (s < t) return -1;
                        if (s > t) return 1;
                    })
                    .forEach(function (m, i) {
                        if (m.isHot === "T") {//热门城市
                            hot_list.push({
                                id: m.cityId,
                                key: m.shortName,
                                text: m.nameCn
                            });
                        }

                        if (!all_list[m.shortName.substr(0, 1).toUpperCase()]) {
                            all_list[m.shortName.substr(0, 1).toUpperCase()] = [];
                        }
                        all_list[m.shortName.substr(0, 1).toUpperCase()].push({
                            id: m.cityId,
                            key: m.shortName,
                            text: m.nameCn
                        });
                    });

                let all_list_html = [];
                let hot_city_html = [];

                for (let i = 0; i < zm_list.length; i++) {
                    let m = zm_list[i];
                    if (all_list[m]) {
                        all_list_html.push(
                            <div key={i}>
                                <div className={city.title}>{m}</div>
                                <Grid data={all_list[m]}
                                    square={false}
                                    columnNum={1}
                                    onClick={(node) => {
                                        router.push(`./index?city=${node.key}&page=1`);
                                    }}
                                    renderItem={dataItem => (
                                        <div style={{ paddingLeft: '1.5px' }}>
                                            <div style={{ paddingLeft: "1px", width: "50px", height: "20px" }}>{dataItem.text}</div>
                                        </div>
                                    )}
                                ></Grid>
                            </div>
                        );
                    }
                }

                hot_city_html.push(
                    <div key='111'>
                        <div className={city.title}>热门城市</div>
                        <Grid data={hot_list}
                            square={false}
                            columnNum={4}
                            onClick={(node) => {
                                router.push(`./index?city=${node.key}&page=1`);
                            }}
                            renderItem={dataItem => (
                                <div style={{ padding: '2.5px' }}>
                                    <span>{dataItem.text}</span>
                                </div>
                            )}
                        />
                    </div>
                );

                resolve(() => (
                    <div>
                        {hot_city_html}
                        {all_list_html}
                    </div>
                )
                );
            });
        })
    });

    return (
        <div>
            <App />
        </div>
    );
}
