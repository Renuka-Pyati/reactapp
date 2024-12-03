import react, { useState } from "react";

const Login = ()=>{
    const [uname,setUname] = useState('')
    const [pass,setPass] = useState('')


        const handleSubmit= ()=>{
            console.log("bclicked")
            if(uname=="123@gmail.com" && pass==123){
                console.log("logged in")
            }
            else
            {
                console.log("worng credential")
            }

            

        }

    return(
        <>
        <h1>login page</h1>
        {console.log(uname,"lg1")}
        {console.log(pass,"lg2")}
        <form>
            <label>user name</label>
            <input type="text" onChange={event=>setUname(event.target.value)} />
            <label>password</label>
            <input type="text" onChange={event=>setPass(event.target.value)}/>
            
            <input type="button" onClick={()=>handleSubmit()} value="Submit"/>
        </form>
        </>
    )
}



export default Login;
