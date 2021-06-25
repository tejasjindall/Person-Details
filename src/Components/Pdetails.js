import React, { useEffect, useState } from 'react'

function Pdetails() {

  useEffect(()=>{
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);
  const[abc, setAbc] = useState(0);
  
  const fetchItems = async () =>{
    const data = await fetch('http://localhost:8000/users');
    const items = await data.json();
    console.log(items);
    setItems(items);
  }

  return (
    <section>
    <form>
        <div>
          <input  style={{ width: '50%' }} type="text" placeholder="Search"/>
        </div>
      </form>
    <div>
    <table  style={{ width: '60%' }}>
    <thead>
        <tr style={{ textAlign: 'right' }} >
        <th>First Name</th>
        <th>Last Name</th>
       </tr>
       </thead>
       <tbody>
      {items.map((item, index)=>(
       <tr  >
        <td key={index}>{abc ? (<input type="text" placeholder= {item.first_name} />) : (item.first_name) }</td>
        <td key={index}>  {item.last_name}</td>
        <td key={index}>
        {
          abc ? (<button>Save</button>) : (<button onClick={(index) =>setAbc(1)}>Edit</button>)
        }

        
        
        
        
        </td>
        </tr>
      ))}
      </tbody>
      </table>
    </div>
    </section>
  )
}

export default Pdetails
