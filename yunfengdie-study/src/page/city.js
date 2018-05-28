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

//删除列表
const DeleteList = [
  { text: "长春", key: "491" },
  { text: "长沙", key: "401" },
  { text: "大连", key: "178" },
  { text: "东莞", key: "434" },
  { text: "东莞", key: "434" },
  { text: "福州", key: "309" },
  { text: "贵阳", key: "614" },
  { text: "广州", key: "6" },
  { text: "哈尔滨", key: "202" },
  { text: "合肥", key: "283" },
  { text: "济南", key: "269" },
  { text: "金华", key: "910" },
  { text: "昆明", key: "546" },
  { text: "南昌", key: "400" },
  { text: "南宁", key: "582" },
  { text: "南通", key: "627" },
  { text: "宁波", key: "250" },
  { text: "南京", key: "100" },
  { text: "青岛", key: "171" },
  { text: "泉州", key: "622" },
  { text: "绍兴", key: "652" },
  { text: "深圳", key: "137" },
  { text: "石家庄", key: "519" },
  { text: "台州", key: "671" },
  { text: "唐山", key: "639" },
  { text: "潍坊", key: "632" },
  { text: "温州", key: "402" },
  { text: "西安", key: "211" },
  { text: "厦门", key: "243" },
  { text: "湘潭", key: "1012" },
  { text: "徐州", key: "722" },
  { text: "烟台", key: "476" },
  { text: "郑州", key: "184" },
];

//校验是否存在
var checkExistDeleteList = function (key) {
  let res = false;
  for (let i = 0; i < DeleteList.length; i++) {
    if (DeleteList[i].key == key) {
      res = true;
      break;
    }
  }
  return res
}



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
          .filter(function (m) {
            return !checkExistDeleteList(m.cityId)
          })
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
