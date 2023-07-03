import style from './style.module.scss';
const Button = (props: {text:string, type?:"button" | "submit" | "reset"}) => {
  return(
    <button className={style.botao}>
      {props.text}
    </button>
  )
}

export default Button;