import React, { Component } from 'react';
import cronometro from './assets/cronometro.png';
import './assets/style.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      numero: 0,
      botao: 'VAI'
    };
    this.timer = null;
    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this)
  };

  vai(){
    let state = this.state;

    if(this.timer !== null){

      clearInterval(this.timer);
      this.timer = null;
      state.botao = 'VAI';
    
    } else {
      
      this.timer = setInterval(()=>{
        state.numero += 0.1;
        this.setState(state)
      }, 100);
      state.botao = 'PAUSAR';

    }


    this.setState(state)
  };

  limpar(){}

  render(){
    return(
      <div className='container'>
        <img src={cronometro} alt='cronometro'/>
        <a className='timer'> {this.state.numero.toFixed(1)} </a>
        <div className='areaBtn'>
          <p className='botao' onClick={this.vai}> {this.state.botao} </p>
          <p className='botao' onClick={this.limpar}> LIMPAR </p>
        </div>
      </div>
    );
  }
}

export default App;
