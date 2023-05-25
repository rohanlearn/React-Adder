import "./UserForm.css"
import Button from "./Button"
import Card from "../UI/Card"
import { useState } from "react"

const UserForm = props => {
    const [userName,updateUser] = useState("")
    const [Age,updateAge] = useState("")
    const [collegeName,updateclgName] = useState("")
   

    
    const getUname= (e) =>{
        e.preventDefault()
        updateUser(e.target.value)

    }
    const getAge= (e) =>{
        e.preventDefault()
        updateAge(e.target.value)
        

    }
    const getCollegeName= (e) =>{
        e.preventDefault()
        updateclgName(e.target.value)
        

    }

    const getData = (e) => {
        e.preventDefault()
        if(userName===""||Age===""|| collegeName===""){
            props.sendConfirm({state:false,message:"Please enter a valid name and age (non-empty values)."})
            return
        }
        if(Age<0){
            props.sendConfirm({state:false,message:"Please enter a valid age (>0)."})
            
            return
        }
        props.getData({uname:userName, age:parseInt(Age),clgName:collegeName});
        updateUser("")
        updateAge("")
        updateclgName("")
        document.querySelectorAll("input").forEach((e)=>{
            e.value=""
        })
    }


    return (
        
            <Card className="main-form">
                <form onSubmit={getData} >
                <label type="text">Username</label>
                <input type="text" value={userName} onChange={getUname}></input>
                <label>Age(Years)</label>
                <input type="number" value={Age} onChange={getAge}></input>
                <label>College Name</label>
                <input type="text" value={collegeName} onChange={getCollegeName}></input>
                <Button>Add User</Button>
                </form>
            </Card>
        
    )

}

export default UserForm