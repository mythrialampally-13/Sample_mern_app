import { useState } from "react"
import {useNavigate } from "react-router-dom"
function Login(){
    let [email,setEmail]=useState("")
    let [password,setPassword]=useState("")

    
    let [error,setError]=useState("")
    
    let navigate=useNavigate()

    let handleLogin=async(event)=>{
        event.preventDefault()
        if(email=="admin@gmail.com" && password=="admin"){
            navigate("/adminhome")
        }else{
            let req=await fetch("http://localhost:3000/api/emp/login",
                {
                    method:"POST",
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify({email,password})
                 });
            let data=await req.json()
            console.log(data); 

        }
    }

    return(
        <div>
            <form onSubmit={handleLogin}>

                
                <input type="text" value={email} 
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="Enter email"></input><br/>
                <input type="password" 
                value={password} 
                onChange={(e)=>setPassword(e.target.val)}
                placeholder="Enter password"></input><br/>
                <button type="submit">Login</button>
            </form>
            {error && <div className="alert alert-danger">{error}</div>}
            

        </div>
    )

}
export default Login