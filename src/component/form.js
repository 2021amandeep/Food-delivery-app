import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {useHistory} from 'react-router-dom';

function Form(){
    const [userName,setUserName]=useState("");
    const [password,setPassword]= useState("");
    let history=useHistory();
    useEffect(()=>{
        if(localStorage.getItem('user')){
            history.push('/home')
        }
    },[])
    function login(e){
        e.preventDefault();
        console.warn(userName,password)
        let user=JSON.stringify({userName});
        let pass=JSON.stringify({password});
        localStorage.setItem('user',user);
        localStorage.setItem('pass',pass);
        history.push('/home')
    }
    return(
        <div className="container">
            <h1>Login here</h1>
                <form>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control"  onChange={(e)=>setUserName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control"  onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block" onClick={login}>Login</button>
                </form>
            </div>
    )
}

export default Form;