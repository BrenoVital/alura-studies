

const List = () => {
  const tarefa = [{
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
    <aside>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefa.map((item, index) => (
          <li key={index}>
            <h3>{item.tarefa}</h3>
            <span>{item.tempo}</span>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default List;