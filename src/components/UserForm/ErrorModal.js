import "./ErrorModal.css"


const ErrorModal = (props)=>{
    const closeModal = (e)=>{
       console.log(e.target.className)
      
       if (e.target.className !== "modal" && e.target.className !== "close") {
        return;
      }
      document.querySelectorAll("input").forEach((e)=>{
        e.value=""
    })
        props.closeModal({state:true})
    }
  

    return(
        <div id="modal" className="modal" onClick={closeModal}>
  
            <div className="modal-content">
            <span className="close" >&times;</span>
                <h1>Error</h1>
                <p>{props.msg}</p>
                
            </div>
            
        
</div>

        
    )
}

export default ErrorModal