import { useState } from "react"
import { ComplateButton } from "./ComplateButton"
import ClearIcon from '@material-ui/icons/Clear';
import { DeletedTask } from "./DeletedTask"
import EditIcon from '@material-ui/icons/Edit';
import { red } from "@material-ui/core/colors";
import BeenhereTwoToneIcon from '@material-ui/icons/BeenhereTwoTone';
let arr = []

export const TodoList = () => {

    let initialDta = [
        {
            task: "work at 10",
            id: 1,
            isCompleted: false,
            isDeleted: false
        }
    ]

    const [data, dataUpdater] = useState(initialDta)
    const [value, setValue] = useState("")
    let [tasksRemain, updateRemainingTask] = useState(initialDta.length)
    let [deletedTask, DeletedTaskUpdater] = useState([])
    let [editable, updateEditable] = useState(null)
    let [editedTaskId, editedTaskIdUpdater] = useState(null)
    let [a,updatea]=useState("")

    //addTsk
    const addThisTask = () => {
        
        if (value.trim().length === 0) {
            alert(" kindely put some task to add !!")
        }
        else {
            updateRemainingTask(tasksRemain + 1)

            let code = (Math.random() + 1).toString(36).substring(7);//unic id
            let newData = { id: code, task: value, isDeleted: false, isCompleted: false }
            dataUpdater([...data, newData])
            setValue("")
        }
    }
    //inputListner

    const onChangeHandler = (event) => {
        let value = event.target.value
        setValue(value)
    }
    //deleteTask
    const deleteTask = (id) => {

        dataUpdater(data.filter((ele) => ele.id !== id))
        let deletedItem = data.find((ele) => ele.id == id)
        console.log(deletedItem)

        if (!arr.includes(id)) {
            arr.push(id)
            updateRemainingTask(tasksRemain - 1)
        }

        DeletedTaskUpdater([...deletedTask, deletedItem])

    }


    const remainings = (Id) => {

        data.map((element) => {

            if (element.id == Id) {
                element.isCompleted = true
            }
        })

        if (!arr.includes(Id)) {
            arr.push(Id)
            updateRemainingTask(tasksRemain - 1)
        }
    }

    const undo = (Id) => {
        // finding DeletedItem
        let undoItem = deletedTask.find((ele) => ele.id == Id)
        // adding undo Item back to data to show
        dataUpdater([...data, undoItem])
        // removing undo Item from deleted List
        DeletedTaskUpdater(deletedTask.filter((ele) => ele.id !== Id))
    }

    const edit = (Id) => {

        updateEditable("true")
        editedTaskIdUpdater(Id)

    }

    const onChangeHandler2 = (event) => {
        
       
        let value = event.target.value
        updatea(value)
        console.log(value)

    }

    const saveIt = (Id) => {
       
        
        let tempTaskHolder = []
        if (a.trim().length === 0) {
            alert(" kindely put some task to add !!")
            tempTaskHolder=data
        } else {
            data.map((ele) => {

                if (ele.id == Id) {
                    ele.task = a
                    tempTaskHolder.push(ele)
                } else {
                    tempTaskHolder.push(ele)
                }
            })

        }
        dataUpdater(tempTaskHolder)
        updateEditable("false")
        updatea(null)


    }

    return (
        <div className='class'>

            <div id="innerDiv">
                <h2 id="head">Pending Tasks ({tasksRemain})</h2>
                {data.map(element =>
                    <div id="p" >

                        {/* <p id="q" style={{ paddingLeft: 10, textDecoration: element.isCompleted === true ? "line-through" : "none"}}>
                         {element.task}</p> */}



                        {element.id != editedTaskId ? <p id="q" style={{ paddingLeft: 10, textDecoration: element.isCompleted === true ? "line-through" : "none" }}>
                            {element.task}</p> : (editable == "true" ? <p><input id="input2" type="text" value={a} placeholder="Hey what's the new plan" onChange={onChangeHandler2} /></p> : <p id="q" style={{ paddingLeft: 10, textDecoration: element.isCompleted === true ? "line-through" : "none" }}>
                                {element.task}</p>)}




                        <input id='complate' type='button' value="complete" onClick={() => remainings(element.id)} />

                        <ClearIcon id="cross" onClick={() => deleteTask(element.id)} />

                        <EditIcon id="edit" onClick={() => edit(element.id)} />
                        {editable == "true" ? <BeenhereTwoToneIcon id="save" onClick={() => saveIt(element.id)} /> : null}
                    </div>)}

                <input id='text' type='text' value={value} placeholder="enter task to add" onChange={onChangeHandler} />

                <input id="btn" type='button' value='submit' onClick={addThisTask} />
            </div>


            <div id="innerDiv">
                <h1 id="deleteHead">DeletedTasks</h1>

                <DeletedTask deletedTask={deletedTask} DeletedTaskUpdater={DeletedTaskUpdater} undo={undo} />

            </div>


        </div>
    )
}
