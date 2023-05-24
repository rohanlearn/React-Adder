
import './App.css';
import UserForm from './components/UserForm/UserForm';
import { useState } from 'react'
import Submissions from './components/Submissions/Submissions';
import Card from './components/UI/Card';
import ErrorModal from './components/UserForm/ErrorModal';
function App() {
  const [validForm,updateValidForm] = useState({state:true,message:""})

   const userEntries = []
   const [entries,updateEntries] = useState(userEntries)

   const modalHandle = (thing)=>{
    updateValidForm(thing)
    

   }

  const getData = (data) => {
    
    updateEntries((prev)=>{
      return [data,...prev]
      
  })
  console.log(entries)
  }


  return (
    <div className="App">
      <UserForm getData={getData} sendConfirm={modalHandle}/>
      {
        !validForm.state && <ErrorModal closeModal={modalHandle} msg={validForm.message}></ErrorModal>
      }
      {entries.length>0 && <Card className="main-form">
        {entries.length > 0 && entries.map((entry)=>{
          return <Submissions item={entry}></Submissions>
  
        })}
      </Card>       
      }
    </div>
  );
}

export default App;
