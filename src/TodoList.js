import { useState } from "react"
import { ComplateButton } from "./ComplateButton"
import ClearIcon from '@material-ui/icons/Clear';
let arr = []
let arr1 = []


export const TodoList = () => {

    let initialDta = [
        {
            task: "work at 10",
            id: 1,
            isCompeted: false,
            isDeleted: false
        },
        {
            task: "sleep early",
            id: 2,
            isCompeted: false,
            isDeleted: false

        }
    ]

    const [data, dataUpdater] = useState(initialDta)
    const [value, setValue] = useState("")
    let [tasksRemain, updateRemainingTask] = useState(initialDta.length)




    const addThisTask = () => {
        if (value.trim().length === 0) {
            alert(" kindely put some task to add !!")
        }
        else {
            updateRemainingTask(tasksRemain + 1)

            let code = (Math.random() + 1).toString(36).substring(7);//unic id
            let newData = { id: code, task: value, isDeleted: false, isCompeted: false }
            dataUpdater([...data, newData])
            setValue("")
        }

    }
    const onChangeHandler = (event) => {
        let value = event.target.value
        setValue(value)
    }

    const deleteTask = (id) => {


        dataUpdater(data.filter((ele) => ele.id !== id))
        if (!arr.includes(id)) {
            arr.push(id)
            updateRemainingTask(tasksRemain - 1)
        }
    }


    const remainings = (Id) => {

        data.map((element) => {

            if (element.id == Id) {

                element.isCompeted = true

            }
        })

        if (!arr.includes(Id)) {
            arr.push(Id)
            updateRemainingTask(tasksRemain - 1)
        }

        // console.log("hi")
        // arr.map((element)=>{
        //     console.log("hi")
        //     if(element.id==Id){
        //         element.isCompeted=true
        //     }else{
        //         arr.push(element)
        //     }
        //     console.log(arr)
        // })
        // if(!tasksRemain==0 ){
        //     updateRemainingTask(tasksRemain-1)

        // }


    }

    return (
        <div className='class'>

            <div id="innerDiv">

                <h2 id="head">Pending Tasks ({tasksRemain})</h2>

                {data.map(element =>
                    <div id="p">

                        <p id="q" style={{ paddingLeft: 10, textDecoration: element.isCompeted === true ? "line-through" : "none" }}>{element.task}</p>
                        <input id='complate' type='button' value="complete" onClick={() => remainings(element.id)} />
                        <ClearIcon id="cross" onClick={() => deleteTask(element.id)} />

                    </div>)}

                <input id='text' type='text' value={value} placeholder="enter task to add" onChange={onChangeHandler} />

                <input id="btn" type='button' value='submit' onClick={addThisTask} />
            </div>



        </div>
    )
}


