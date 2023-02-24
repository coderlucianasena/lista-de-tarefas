import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/item';
import { LisItem } from './components/ListItem';
import { AddArea } from './components/AddArea';
import github from './assets/images/github.png';
import linkedin from './assets/images/linkedin.png';

const App = () => {
  const  [list, setList] = useState<Item[]>([
    { id: 1, name: 'Comprar o pão na padaria', done: true }, //modifica o estado marcado e não marcado
    { id: 2, name: 'Comprar um bolo na padaria', done: true }, //modifica o estado marcado e não marcado
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  }

  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }

  return (
    <C.Container>
        <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddArea  onEnter={handleAddTask} />

        {list.map((item, index)=>(
            <LisItem 
            key={index} 
            item={item}
            onChange={handleTaskChange} />
        ))}
      </C.Area>
      <C.Footer>

      <a href='https://github.com/englucianasena' target='blank'>
      <img src={github} 
      className="App-logo" 
      alt="logo" 
      height="50"
      width="50"
      />
      </a>
      <a href='https://www.linkedin.com/in/englucianasena/' target='blank'>
        <img src={linkedin} 
        className="App-logo" 
        alt="logo" 
        height="50"
        width="50"
        />
      </a>
      
      </C.Footer>
    </C.Container>
  );
}

export default App;