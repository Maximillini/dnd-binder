import React from 'react';
import CharacterSheet from './CharacterSheet';

const PlayersPage = () => (
  <div className="PlayerPage container">
    <div className="row left-align">
      <button className="add-button">Add Character</button>
    </div>
    <CharacterSheet />
    <CharacterSheet />
    <CharacterSheet />
    <CharacterSheet />
  </div>
);

export default PlayersPage;