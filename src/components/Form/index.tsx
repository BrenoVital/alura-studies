import { FormEvent, useState } from "react";
import Button from "../Button"
import style from "./style.module.scss"
import { ITarefa } from "../../types/tarefa";

const Form = (
  { setTarefas }: { setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>> }
) => {
  const [state, setState] = useState("00:00:00");
  const [tarefa, setTarefa] = useState("");
  const adicionarTarefa = (evento: FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    setTarefas((tarefasAntigas) => {
      return [...tarefasAntigas, {
        tarefa: tarefa,
        tempo: state,
        id: tarefasAntigas.length + 1
      }]
    })
  }

  return (
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">
          Adicionar uma tarefa
        </label>
        <input type="text" name="tarefa" id="tarefa" placeholder="Qual é a nova tarefa?" required value={tarefa} onChange={evento => setTarefa(evento.target.value)} />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">
          Tempo
        </label>
        <input type="time" step="1" id="tempo" min="00:00:00" max="01:30:00" value={state} onChange={evento => setState(evento.target.value)} />
      </div>
      <Button text="Adicionar" type="submit" />
    </form>
  )
}

export default Form;