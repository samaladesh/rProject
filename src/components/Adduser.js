import React from 'react'
import { useState } from 'react';
import axios from 'axios'

function Deals() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState();
    const [password, setPassword] = useState("");

    const handleSubmitUser = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4200/User", {
            name: name,
            email: email,
            contact: contact,
            password: password
        }).then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
    }
    return (
        <>
            {/* <div className='add-btn'><button>Add-User</button></div> */}
            <form className='container'>

                <div>
                    <label htmlFor="exampleInputPassword1">Name</label>
                    <input type="text" onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="exampleInputPassword1">Phone Number</label>
                    <input type="number" onChange={((e)=>setContact(e.target.value))}/>
                </div>
                <div>
                    <label htmlFor="exampleInputPassword1" >Password</label>
                    <input type="password" onChange={((e)=>setPassword(e.target.value))}/>
                </div>

                <button type="submit" onClick={handleSubmitUser}>Submit</button>
            </form>
        </>
    )
}

export default Deals