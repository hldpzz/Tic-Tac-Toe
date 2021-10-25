
import Button from '@restart/ui/esm/Button';
import { Row } from 'react-bootstrap';
import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       player:'X',
       gameState:'running',
       gameMatrix:[[null,null,null],[null,null,null],[null,null,null]]
    }
    this.handleClick=this.handleClick.bind(this)
  }

  handleClick = function(dx,dy){
    if(this.state.player=='X'){
      let intMatrix = this.state.gameMatrix
      intMatrix[dx][dy]='X'
      this.setState({
        player:'O',
        gameMatrix:intMatrix
      })
    }else{
      let intMatrix = this.state.gameMatrix
      intMatrix[dx][dy]='O'
      this.setState({
        player:'X'
      })
    }
    console.log(this.state.gameMatrix)
  }
  
  render() {
    return (
      <Row className='gameContainer'>
        <div className='GameInfo'>
          <h1>Now is the turn of player:{this.state.player}</h1>
          <h2>The game is: {this.state.gameState}</h2>
          </div>
      <div className='App'>
      <Row className='Row'>
        <Button className='Btn' onClick={()=>this.handleClick(0,0)}>{this.state.gameMatrix[0][0]}</Button>
        <Button className='Btn' onClick={()=>this.handleClick(1,0)}>{this.state.gameMatrix[1][0]}</Button>
        <Button className='Btn' onClick={()=>this.handleClick(2,0)}>{this.state.gameMatrix[2][0]}</Button>
      </Row>
      <Row className='Row'>
      <Button className='Btn' onClick={()=>this.handleClick(0,1)}>{this.state.gameMatrix[0][1]}</Button>
        <Button className='Btn' onClick={()=>this.handleClick(1,1)}>{this.state.gameMatrix[1][1]}</Button>
        <Button className='Btn' onClick={()=>this.handleClick(2,1)}>{this.state.gameMatrix[2][1]}</Button>
      </Row>
      <Row className='Row'>
      <Button className='Btn' onClick={()=>this.handleClick(0,2)}>{this.state.gameMatrix[0][2]}</Button>
        <Button className='Btn' onClick={()=>this.handleClick(1,2)}>{this.state.gameMatrix[1][2]}</Button>
        <Button className='Btn' onClick={()=>this.handleClick(2,2)}>{this.state.gameMatrix[2][2]}</Button>
      </Row>
      </div>
      </Row>
    )
  }
}
