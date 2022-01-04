
import { useState } from "react"


export const TodoList = () => {
    const [data, dataUpdater]=useState(["work 4 hr","meeting at 5pm"])

    const onclick=()=>{
    const k=document.getElementById("text")
    
    if((k.value).length!==0){
        const newdata=[...data,k.value]
        dataUpdater(newdata)
        k.value=""
    }else{
        alert("please fill the task to do")
    }
}

     
    return (
        <div className='class'>
        
        {data.map(element => <h1 id ="p">{element}</h1>)}
        
        <input id='text' type='text' placeholder="enter task to add"/>

        <input id ="btn" type='button' value='submit' onClick={onclick}/>
        
    </div>
    )
}


   