import React from 'react';
import './CharacterSheet.scss';

export default class CharacterSheet extends React.Component {
  constructor() {
    super();
    this.addHealth = this.addHealth.bind(this);
    this.loseHealth = this.loseHealth.bind(this);
    this.state = {
      hp: 10
    };
  }

  addHealth() {
    this.setState((prevState) => { 
      return {
        hp: prevState.hp + 1 
      };
    });
  }

  loseHealth() {
    this.setState((prevState) => {
      return {
        hp: prevState.hp - 1
      };
    });
  }

  render() {
    return (
      <div className="CharacterSheet">
        <p className="name">Character Name: </p>
        <p className="name">Player Name: </p>
        <p>Level: 1</p>
        <p>HP - {this.state.hp}</p>
        <button className="hp-button" onClick={this.addHealth}>+</button>
        <button className="hp-button" onClick={this.loseHealth}>-</button>
      </div>
    );
  }
}
