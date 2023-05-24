import "./Submissions.css"



const Submissions = (props) => {

    return (
        
            <div className="entry">
               <p>{props.item.uname} ({props.item.age} years old)</p> 

            </div>
        
    )
}

export default Submissions
