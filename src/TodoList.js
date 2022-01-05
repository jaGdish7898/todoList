
import { useState } from "react"

import {ComplateButton} from "./ComplateButton"
import ClearIcon from '@material-ui/icons/Clear';
// import DeleteIcon from '@material-ui/icons/Delete';

export const TodoList = () => {
    let initialDta = [{task:"work at 10",id:1},{task:"sleep early",id:2}]

    const [data, dataUpdater] = useState(initialDta)
    const [value, setValue] = useState("")

    // function aaa(Id){
    //     console.log(Id)
    // }

    
    const onclick = () => {
        // <FaTimes id ="cross" onChange={()=>deleteTask("hi")}/>
        

        let code=(Math.random() + 1).toString(36).substring(7);
        let newData={id:code,task:value}
        console.log(newData)
        
        // const newdata = [...data, value]
        dataUpdater([...data,newData])
      
        setValue("")
    }
    const onChangeHandler = (event) => {
        let value = event.target.value
        setValue(value)
    }

    const deleteTask=(id)=>{
        console.log(id)
        let r=data.map((ele)=>ele.id!==id)
        console.log(r)
        dataUpdater(data.filter((ele)=>ele.id!==id))
        
        
        // data=data.map((ele)=>{ele.id!=id})
        // dataUpdater(data)
        
    }

    return (
        <div className='class'>
        
        
        
            <div id ="innerDiv">
           
            <h2 id="head">Pending Tasks ({/*tasksRemain*/})</h2>
                {data.map(element => <h1 id="p">{element.task} 
                <ComplateButton  /><ClearIcon  id ="cross" onClick={()=>deleteTask(element.id)}/>
                 </h1>)}

                <input id='text' type='text' value={value} placeholder="enter task to add" onChange={onChangeHandler} />

                <input id="btn" type='button' value='submit' onClick={onclick} />
            </div>



        </div>
    )
}


