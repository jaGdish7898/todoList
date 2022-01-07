import logo from './logo.svg';
import './App.css';
// import {Hello} from './hello'
import {TodoList} from "./TodoList"
import { useState } from "react"
export function App() {

  let initialDta = [
    {
        task: "work at 10",
        id: 1,
        isCompleted: false,
        isDeleted: false
    },
    {
        task: "sleep early",
        id: 2,
        isCompleted: false,
        isDeleted: false

    }
]

const [data, dataUpdater] = useState(initialDta)
  return (
    <>
   
    
   <TodoList data={data} dataUpdater={dataUpdater}/>
    </>
   
  );
}

export default App;
