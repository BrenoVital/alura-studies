import { ITarefa } from '../../../types/tarefa'
import style from '../style.module.scss';

interface IItem extends ITarefa {
  selecionaTarefa: (tarefaSelecionado: ITarefa) => void;
  selecionado?: ITarefa;
  completado?: boolean;
}
  

export const Item = ({tarefa, tempo, selecionado, completado, id, selecionaTarefa}: IItem) => {
  return(
    <li className={style.item} onClick={() => {
      selecionaTarefa({tarefa, tempo, selecionado, completado,id})
    }}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  )
}