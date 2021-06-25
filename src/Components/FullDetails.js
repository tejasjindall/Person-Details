import React, { Component } from 'react'
import './Details.css'


export class FullDetails  extends Component {
constructor(props) {
  super(props)

  this.state = {
    item: {},
    abc:0
  }

  this.handleEdit = this.handleEdit.bind(this)
 
}

async componentDidMount(){
  const response = await fetch(`http://localhost:8000/users/${this.props.match.params.id}`);
  const data = await response.json();
  console.log(data);
  this.setState({
      item: data
  })
  console.log(this.props.match,"match");
  console.log(this.state.item.first_name,"hello")
}

handleEdit=()=>{
  this.setState({
    abc:1
  })
  console.log("edit clicked")
}

handleChange=(event)=>{
  const newData = {...this.state.item};

    newData.first_name = event.target.value;
    console.log(newData,"newData")

    this.setState({
      item:newData

    })
    
    
}
handleSave=()=>{
  this.setState({
    abc:0
  })
  fetch(`http://localhost:8000/users/${this.props.match.params.id}`, {  //${this.state.items[index].id}
  method: 'PUT', 
  headers: { 'Content-Type': 'application/json',},
  body: JSON.stringify(this.state.item),
})
}

handleCancel=()=>{
  this.setState({
    abc:0
  })
}

  render() {
    return (
      <div>
      <section>
      
      <img src={this.state.item.dp} className="avatar" alt="profile_pic" />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQjAMZ6OzaQsNzI0_MMHnbNuIdu8CdwxMsCA&usqp=CAU" className="editimg" alt="edit"
      onClick = {this.handleEdit.bind(this)}
      />
      <h2>First Name ={this.state.abc ? (<input type="text" value={this.state.item.first_name} onChange={event => this.handleChange(event)}/>):(this.state.item.first_name)}
        </h2>
       <h2>Last Name = {this.state.item.last_name}</h2>
       <button onClick={this.handleSave}>SAVE</button><button onClick={this.handleCancel}>Cancel</button>
       </section>
       </div>
    )
  }
}

export default FullDetails
