import style from './index.css'
export default function (props) {
  return (
    <div>
      <header data-alt='头部' className={style.ctrl_dis}></header>
      {
        props.children
      }
      <footer data-alt="底部" className={style.ctrl_dis}></footer>
    </div>
  )
}