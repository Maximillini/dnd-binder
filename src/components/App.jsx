import React from 'react';
import CharacterSheet from './CharacterSheet';
import './App.scss';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">DnD Binder</h1>
        </header>
        <div className="player-container">
          <div className="row left-align">
            <button className="add-character">Add Character</button>
          </div>
          <CharacterSheet />
          <CharacterSheet />
          <CharacterSheet />
          <CharacterSheet />
          <CharacterSheet />
        </div>
      </div>
    );
  }
}
