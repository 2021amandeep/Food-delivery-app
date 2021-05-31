import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import LoginHeader from './LoginHeader';

function Account(){
    const [userName,setUserName]=useState("");
    const [password,setPassword]= useState("");

    
    function login(e){
        e.preventDefault();
        // console.warn(userName,password);
        let pass=JSON.stringify({password});
        localStorage.setItem('pass',pass);
        alert('Password saved successfully');
        
        // console.log(item);
        
    }
    let user =JSON.parse(localStorage.getItem('user'))
    console.log(user)
    return(
        <div className="container">
        <LoginHeader/>
            <h1>Change Your Password</h1>
            {/* {JSON.parse(localStorage.getItem('user'))} */}
                <form>
                    <div className="form-group">
                        <label>Username:</label>
                        {/* {var name=JSON.stringify(localStorage.getItem('user'))} */}
                        
                        <h2>{user.userName}</h2>
                        {/* <h2>{user}</h2> */}
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control"  onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block" onClick={login}>Update Password</button>
                </form>
            </div>
    )
}

export default Account;