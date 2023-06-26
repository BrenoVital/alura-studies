import Button from "../Button"
import style from "./style.module.scss"



const Form = () => {
  return (
    <form className={style.novaTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">
          Adicione um novo estudo 
        </label>
        <input type="text" name="tarefa" id="tarefa" placeholder="O que você quer estudar?" required/>
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">
          Tempo
        </label>
        <input type="time" step="1" id="tempo" min="00:00:00" max="01:30:00" />
      </div>
        <Button />
    </form>
  )
}

export default Form;