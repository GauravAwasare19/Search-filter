import { useState } from 'react'
import './App.css'
import {data} from './data.jsx'
import Sresult from './Sresult'

function App() {
  
  const [search, setSearch] = useState('')
  const[img,setImg]= useState("")
  const SecondSearch =(event)=>{
    const data = event.target.value;
    setImg(data);
  } 
  


  return (
    <div className="App">
        <h1>Contacts</h1>
        <form>
          <input type="text" placeholder='Search' onChange={(e)=> setSearch(e.target.value)}></input>
          <div className='divv'>
              <h1 className='div1'>First Name</h1>
              <h1 className='div2'>Last Name</h1>
              <h1 className='div3'>Email</h1>
            </div>
          {data.filter((item)=>{
            return search.toLowerCase() === "" ? item : item.first_name.toLowerCase().includes(search);
          }).map((item)=>(
            <div className='divv' key={item.id}>
              <h3 className='div1'>{item.first_name}</h3>
              <h3 className='div2'>{item.last_name}</h3>
              <h3 className='div3'>{item.email}</h3>
            </div>
          ))}
        </form>


        <form>
          <div>
            <input type="text" value={img} placeholder='Search' onChange={SecondSearch}>
            </input>
            </div>
        </form>
        <Sresult name={img}/>
    </div>
  )
}

export default App
