import Button from "../Button"
import Relogio from "./Relogio/indext";
import style from "../Cronometro/Cronometro.module.scss"

export const Cronometro = () => {
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}> Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio />
      </div>
      <Button text="Começar!" />
    </div>
  )
}
export default Cronometro;