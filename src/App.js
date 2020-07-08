import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ConditionalSection from './sections/conditional'
import cars from './data/cars.json';
import Forms from './sections/forms';
import PropTypes from 'prop-types';

class Title extends Component {

  constructor(){
    super()
    this.state = { contador: 1}
    setInterval(() => { 
        this.setState({ contador: this.state.contador + 1 })
    },1000)
  }
  
  render(){
        return(
            <div></div>
        )
    }
}

class ContadorNumero extends Component {

      render(){
         return <span> {this.props.numero} </span>
      }
}

Title.defaultProps = {
  text: 'Ok'
}

class CarItem extends Component {

    render(){

        const { car } = this.props;

        return(
          <li >
          <p> nombre: {car.name} </p>
          <p> Company: {car.company} </p>
           </li>
        )

    }
}

class Box extends Component {

    render(){
       return(
          <div style={{border: '1px solid #000', margin: 5, padding: 5}}>
              {this.props.children}
          </div>
       )
    }
}

class Article extends Component {


  
    static propTypes = {
      author: PropTypes.string.isRequired
    }

    render(){

        const { author, date, children, title } = this.props;

       return(
            <section>
               <h2> {title} </h2>
              { author && <p> Escrito por {author} </p>  }
               <Box>{date}</Box>
               <article>
                   {children}
               </article>
            </section>
       )
    }

}


class App extends Component {

  handler(e){
      console.log(e)
     alert("OK")
  }




  render(){

    const numbers = [1,2,3,4,5,6];
/*
  return (
    <div className="App">
      <p> Carros </p>
      <div>
            <ul>
                  {cars.map(car =>{
                    return(
                      <CarItem key={car.id} car={car} />
                    )
                  })}
               </ul>
            </div>
    </div>
  );
  */
  /*return(
    <div className="App">
        <h3>Eventos </h3>
        <button onClick={this.handler}>Evento</button>
    </div>
  )*/

  return(
    <div className="App">
        <h3>Eventos </h3>
        <Article
       
            date={new Date().toLocaleDateString()}
            title='Articulo'
        >
            <strong> OK es el children </strong>
        </Article>
    </div>
  )
}
}

export default App;
