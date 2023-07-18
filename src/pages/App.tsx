import React, { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import style from './style.module.scss';
import Cronometro from '../components/Cronometro/index';
import { ITarefa } from '../types/tarefa';

export default function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();
  function selecionaTarefa(tarefaSelecionado: ITarefa) {
    setSelecionado(tarefaSelecionado);
  }
  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <List
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
      <Cronometro />
    </div>
  );
}