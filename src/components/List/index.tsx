import { ITarefa } from '../../types/tarefa';
import { Item } from './Item';
import style from './style.module.scss';

interface IList {
  tarefas: ITarefa[];
  selecionaTarefa: (tarefaSelecionado: ITarefa) => void;
  
}

const List = ({tarefas, selecionaTarefa}: IList) => {
  return (
    <aside className={style.listaTarefas}>
      <h2 >Estudos do dia</h2>
      <ul>
        {tarefas.map(item => (
          <Item
          selecionaTarefa={selecionaTarefa}
          key={item.id}
          {...item}
          />
        ))}
      </ul>
    </aside>
  )
}

export default List;