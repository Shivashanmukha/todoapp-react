import React from 'react'
import { useState } from 'react'
import star from './src/assets/star.jpg'

const ToDo = () => {
    // holding the task
    const[tasks,setTasks]=useState([])
    // setting the new task
    const[newTask,setNewTask]=useState("")

    // funtion that Handles the input box
    function handleInput(event){
        // event stands on synthatic events
        // console.log(event.target.value)
        setNewTask(event.target.value)
    }

    // function to add the task
    function addTheTask(){
        // setTasks(Tasks=>[...Tasks,newTask])
        // setNewTask("")
    //    debugger
        if(newTask.trim()!==""){
            setTasks(T=>[...T,newTask])
            setNewTask("")
        }
    }

    // function to delete the task
    function deletTheTask(index){
        // console.log(index)
        // filtering the task
        let updateTask=tasks.filter((_,i)=>i!==index)
        setTasks(updateTask)
    }

    // function to move the task up
    function moveUp(index){
        debugger
        // let updateTask=[...tasks]
        // [updateTask[index],updateTask[index-1]]=[updateTask[index-1],updateTask[index]]
        // setTasks(updateTask)
        // if(index>0){
        //     const updateTask=[...tasks]
        //     [updateTask[index],updateTask[index-1]]=[updateTask[index-1],updateTask[index]]
        //     console.log(updateTask)
        //     setTasks(updateTask)
        // }
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    // function to move the task down
    function moveDown(index){
        // let updateTask=[...tasks]
        // [updateTask[index],updateTask[index+1]]=[updateTask[index+1],updateTask[index]]
        // setTasks(updateTask)
        // if(tasks.length-1<0){
        //     let updateTask=[...tasks]
        //     [updateTask[index],updateTask[index+1]]=[updateTask[index+1],updateTask[index]]
        //     setTasks(updateTask)
        // }
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    // function to edit the task
    function editTask(index) {
        const taskToEdit = tasks[index];
        setNewTask(taskToEdit); // Set the input field with the task to edit
        deletTheTask(index); // Delete the task so it can be replaced
    }


  return (
    // <div style={{
    //     backgroundImage: `url('./src/assets/star.jpg')`,
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    //     backgroundRepeat: 'no-repeat',
    //     width: '100%',
    //     minHeight: '100vh',
    //     }}>
//         <div className='container'>
//             {/* heading start */}
//             <h1 style={{color:'white', display:'flex', alignItems:'center',justifyContent:'center', padding:'50px'}}>ToDo App</h1>
//             {/* heading end */}
//             {/* user-input box start */}
//             <div className="input-group mb-3">
//                 <input type="text" className="form-control" placeholder="Recipient's username"
//                 value={newTask} onChange={handleInput}/>
//                 <button className="input-group-text bg-primary text-black btn" id="basic-addon2" onClick={addTheTask}>AddTask</button>
//             </div>
//             {/* user-input box end */}
//             <ul>
//                 {
//                     tasks.map((task,index)=>{
//                         return <li key={index} className='list-group border' style={{color: 'white'}}>
//                             <span>{task}</span>
//                             {/* <button onClick={()=>addTheTask(index)}><i className="bi bi-plus-circle"></i></button> */}
//                             <div className="d-flex justify-content-end align-items-end">
//                                 <button className="btn btn-outline-primary btn-sm mx-1" onClick={()=>deletTheTask(index)}><i className="bi bi-trash-fill"></i></button>
//                                 <button className="btn btn-outline-primary btn-sm mx-1" onClick={()=>moveUp(index)}><i className="bi bi-arrow-up"></i></button>
//                                 <button className="btn btn-outline-primary btn-sm mx-1" onClick={()=>moveDown(index)}><i className="bi bi-arrow-down"></i></button>
//                                 <button className="btn btn-outline-primary btn-sm mx-1" onClick={()=>editTask(index)}><i className="bi bi-pen-fill"></i></button>
//                             </div>
//                         </li>
//                     })
//                 }
//             </ul>
//         </div>
//     </div>
//   )
    <div style={{
        backgroundImage: `url('star')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        minHeight: '100vh',
        }}>
        <div className='container-fluid'>
            <div className="row justify-content-center">
                <div className="col-lg-10 col-md-12 col-sm-10 col-12">
                    <div className="todo-list p-1 rounded shadow my-5">
                        <h1 className="text-center text-white">ToDo App</h1>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Enter task" value={newTask} onChange={handleInput} />
                            <button className="btn btn-primary" onClick={addTheTask}>Add Task</button>
                        </div>
                        <ul className="list-group">
                            {tasks.map((task, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                <span className="flex-grow-1">{task}</span>
                                <div className="button-group">
                                    <button className="btn btn-outline-primary btn-sm mx-1" onClick={() => moveUp(index)}><i className="bi bi-arrow-up"></i></button>
                                    <button className="btn btn-outline-primary btn-sm mx-1" onClick={() => moveDown(index)}><i className="bi bi-arrow-down"></i></button>
                                    <button className="btn btn-outline-secondary btn-sm mx-1" onClick={() => editTask(index)}><i className="bi bi-pen-fill"></i></button>
                                    <button className="btn btn-outline-danger btn-sm mx-1" onClick={() => deletTheTask(index)}><i className="bi bi-trash-fill"></i></button>
                                </div>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}

export default ToDo
