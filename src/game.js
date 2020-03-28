import React, { Component } from 'react';
import Snake from './Snake';
import Food from './Food';

const getRandomCoordinates = () => {
  let min = 1;
  let max = 100;
  let x = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
  let y =  Math.floor((Math.random()*(max-min+1)+min)/2)*2;
  return [x,y]
}

const initialState = {
  food: getRandomCoordinates(),
  speed: 100,
  puan:1,
  direction: 'RIGHT',
  snakeDots: [
    [0,0],
    [2,0]
  ]
}

class Game extends Component {








  state = initialState;

  componentDidMount() {
    setInterval(this.moveSnake, this.state.speed,this.state.puan);
    document.onkeydown = this.onKeyDown;
  }

  componentDidUpdate() {
    this.checkIfOutOfBorders();
    this.checkIfCollapsed();
    this.checkIfEat();
    
  }




  onKeyDown = (e) => {
    e = e || window.event;
    if(e.keyCode == 38) {
        this.setState({direction: 'UP'});
    }
    if(e.keyCode == 40) {
      this.setState({direction: 'DOWN'});

  }

  if(e.keyCode == 37) {
    this.setState({direction: 'LEFT'});

}

if(e.keyCode == 39) {
  this.setState({direction: 'RIGHT'});

}

  }



  moveSnake = () => {
    let dots = [...this.state.snakeDots];
    let head = dots[dots.length - 1];

    switch (this.state.direction) {
      case 'RIGHT':
        head = [head[0] + 2, head[1]];
        break;
      case 'LEFT':
        head = [head[0] - 2, head[1]];
        break;
      case 'DOWN':
        head = [head[0], head[1] + 2];
        break;
      case 'UP':
        head = [head[0], head[1] - 2];
        break;
    }
    dots.push(head);
    dots.shift();
    this.setState({
      snakeDots: dots
    })
  }

  checkIfOutOfBorders() {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
      this.onGameOver();
    }
  }

  checkIfCollapsed() {
    let snake = [...this.state.snakeDots];
    let head = snake[snake.length - 1];
    snake.pop();
    snake.forEach(dot => {
      if (head[0] == dot[0] && head[1] == dot[1]) {
        this.onGameOver();
      }
    })
  }

  checkIfEat() {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    let food = this.state.food;
    if (head[0] == food[0] && head[1] == food[1]) {
      this.setState({
        food: getRandomCoordinates()
      })
      this.enlargeSnake();
      this.increaseSpeed();
      this.puans();
    }
  }

  enlargeSnake() {
    let newSnake = [...this.state.snakeDots];
    newSnake.unshift([])
    this.setState({
      snakeDots: newSnake
    })
  }

  increaseSpeed() {
    if (this.state.speed > 10) {
      this.setState({
        speed: this.state.speed - 10,
      })
   
    }
  }


puans(){
  if (this.state.snakeDots.length) {
    
       let number = this.state.snakeDots.length;
      const k =  number-=1;
  }
}


  onGameOver() {
    alert(`Oyun bitti!`);
    this.setState(initialState)
  }

  render() {
    return (
     <div>
     
     
      <h2 style={{textAlign:'center'}}> Puan:{this.state.snakeDots.length-2}</h2>   
      <div className="game-area">
      
        
      <Snake snakeDots={this.state.snakeDots}/>
        <Food dot={this.state.food}/>
      </div>
  
      </div>
  
      );
  }
}

export default Game;