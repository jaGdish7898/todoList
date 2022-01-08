

 import { useState } from "react"
 import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
 
 export const DeletedTask = ({deletedTask,DeletedTaskUpdater,undo}) => {
 
     
     return (
         < >
         
         { deletedTask.map((task)=>
         
         <div id="deleteItemDiv"> <p id="deleteItem">{task.task} </p> 
         <SettingsBackupRestoreIcon id ="undo" onClick={()=>undo(task.id)}/> </div>  )}

         
              
         {/* <SettingsBackupRestoreIcon id="undo"/> */}
             {/* <h1 id ="deleteHead">Deleted Tasks</h1>
             {deletedTask.map((task)=> <h2>{task}</h2>) }
              */}
         </>
     )
 }
 

 