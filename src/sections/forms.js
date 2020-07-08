import React, { Component } from 'react'

class Forms extends Component {

  constructor(){
     super()
     this.state = {
         inputName: '',
         inputTerm: true
     }
  }

  handlerClick = (e) => {
   e.preventDefault();
   console.log(this.state)
}

  
  handleChange = (e) => {
   console.log(e.target.checked);
   this.setState({ inputTerm: e.target.checked })
}

  render(){
     return(

      <form onSubmit={this.handlerClick}>
      <label htmlFor='name'> Nombre </label>
      <input id="name"
             name="inputName"
             onChange = { e => this.setState({inputName: e.target.value })}
             placeholder="Introduce"
             value={this.state.inputName}> 
      </input>

      <p> 
      <label>
        Accept
        <input checked={this.state.inputTerm} onChange={this.handleChange} type="checkbox"  />
      </label>
      </p>

      <button>Enviar</button>

  </form>

     )
  }

}

export default Forms;