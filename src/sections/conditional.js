import React, {Component} from 'react';


class LoginButton extends Component {
   render(){
      return <button> Iniciar </button>
   }
}

class LogoutButton extends Component {
   render(){
      return <div> 
            <p> Bienvenido Usuario </p>
            <button> Cerrar Session </button>
          </div>
   }
}





class ConditionalSection extends Component {

 constructor(){
    super()
    this.state = { isUserLogger: false }
 }


 render(){
 
    return(
      <div> 
       <h4> Condicional </h4>
       { this.state.isUserLogger ? <LogoutButton/> : <LoginButton/> }
       </div>
    )
 }
}

export default ConditionalSection;