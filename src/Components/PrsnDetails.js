import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './Details.css'

export class PrsnDetails extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      items: [],
      
   }
   this.handleEdit = this.handleEdit.bind(this)
   this.handleChange = this.handleChange.bind(this)
   this.handleSave = this.handleSave.bind(this)
 }

 async componentDidMount(){
    const response = await fetch('http://localhost:8000/users');
    const data = await response.json();
    console.log(data);
    this.setState({
        items: data
    })
 }
  handleEdit = (index) =>{
  
    console.log("edit clicked",index);
    const newData = [...this.state.items];

    newData[index].edit = !newData[index].edit;
    this.setState({
      items:newData

    })
  
  }

  handleChange = (event, index) =>{
    console.log(index,event);
    const newData = [...this.state.items];

    newData[index].first_name = event.target.value;
    console.log(newData,"newData")
    this.setState({
      items:newData

    })
  }
  handleSave = (index) =>{
  
    console.log("save clicked",index);
    const newData = [...this.state.items];

    newData[index].edit = !newData[index].edit;
    this.setState({
      items:newData

    })
    console.log(this.state.items[index].first_name,"hello");
    fetch(`http://localhost:8000/users/${this.state.items[index].id}`, {  //${this.state.items[index].id}
  method: 'PUT', 
  headers: { 'Content-Type': 'application/json',},
  body: JSON.stringify(this.state.items[index]),
})
  }
   
  
 


  render() {
    return (
      <div>
      <section>
      <table  style={{ width: '60%' }}>
      <thead>
          <tr style={{ textAlign: 'center' }} >
          <th>First Name</th>
          <th>Last Name</th>
         </tr>
         </thead>
         <tbody>
        {this.state.items.map((users,index)=>(
         <tr key={users.id}>
         <td style={{ width: '60%' }}>{users.edit ? (<input type="text" value= {users.first_name} onChange={event => this.handleChange(event,index)} />) : ( <Link to={`/adrs/${users.id}`}> {users.first_name} </Link>) }</td>
          <td style={{ width: '60%' }}> 
          {users.last_name} 
          </td>

          <td key={index}  >
          {
            users.edit ? (<button onClick={this.handleSave.bind(this,index)}>Save</button>) : (<button onClick={this.handleEdit.bind(this,index)}>Edit</button>)
          }
          </td>
          </tr>
        ))}
        </tbody>
        </table>
        </section>
      </div>
    )
  }
}

export default PrsnDetails
