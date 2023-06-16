import React from 'react'
import '../Css/Addtask.css'
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


function Addtask() {
    const navigate = useNavigate();
    const [ task, setTask] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4200/data', {
            task: task,
            status: status
        }).then((res) => {
            if (res) {
                console.log(res)
                navigate('/task')
            }else{
                navigate('/task/addtask')
            }
        }).catch((err) => {
            console.log(err);
        })
        // const notify = () => toast("Task Added");
    }

    return (
        <>
            <div className='blur-bg'>
                <div className='main-block'>
                    <h1>Add Your Task</h1>
                    <form action="/">
                        <hr />
                        <input type="text" name="name" id="name" placeholder="Task" onChange={(e) => setTask(e.target.value)} />
                        <div className="gender" onChange={(e) => setStatus(e.target.value)}>
                            <input type="radio" value="Pending" id="male" name="gender" />
                            <label htmlFor="male" className="radio">pending</label>
                            <input type="radio" value="Completed" id="female" name="gender" />
                            <label htmlFor="female" className="radio">Success</label>
                        </div>
                        <hr />
                        <div className="btn-block">
                            <button type="submit" onClick={handleSubmit}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Addtask;