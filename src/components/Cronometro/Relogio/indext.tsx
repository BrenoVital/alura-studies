import style from './Relogio.module.scss';
export const Relogio = () => {
  return (
    <>
    <span className={style.relogioNumero}>0</span>
    <span className={style.relogioNumero}>0</span>
    <span className={style.relogioDivisao}>:</span>
    <span className={style.relogioNumero}>0</span>
    <span className={style.relogioNumero}>0</span>
    {/* <span>:</span>
    <span>0</span>
    <span>0</span> */}
    </>
  )
}

export default Relogio;