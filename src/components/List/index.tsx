import { Item } from './Item';
import style from './style.module.scss';
const List = () => {
  const tarefas = [{
    tarefa: 'React',
    tempo: '02:00:00',
    id: 1
  },
  {
    tarefa: 'JavaScript',
    tempo: '01:00:00',
    id: 2
  },
  {
    tarefa: 'TypeScript',
    tempo: '01:00:00',
    id: 3
  }]
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item
          key={index}
          {...item}
          />
        ))}
      </ul>
    </aside>
  )
}

export default List;