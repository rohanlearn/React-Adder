import "./UserForm.css"
import Button from "./Button"
import Card from "../UI/Card"

const UserForm = props => {
   

    let userName = ""
   let Age = 0
    const getUname= (e) =>{
        e.preventDefault()
        userName=e.target.value

    }
    const getAge= (e) =>{
        e.preventDefault()
        Age=e.target.value
        

    }

    const getData = (e) => {
        e.preventDefault()
        if(userName===""||Age===""){
            props.sendConfirm({state:false,message:"Please enter a valid name and age (non-empty values)."})
            return
        }
        if(Age<0){
            props.sendConfirm({state:false,message:"Please enter a valid age (>0)."})
            
            return
        }
        props.getData({uname:userName, age:parseInt(Age)});
        userName = ""
        Age = 0
        document.querySelectorAll("input").forEach((e)=>{
            e.value=""
        })
    }


    return (
        
            <Card className="main-form">
                <form onSubmit={getData} >
                <label type="text">Username</label>
                <input type="text" onChange={getUname}></input>
                <label>Age(Years)</label>
                <input type="number" onChange={getAge}></input>
                <Button>Add User</Button>
                </form>
            </Card>
        
    )

}

export default UserForm