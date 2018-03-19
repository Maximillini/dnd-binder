import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import PlayersPage from '../components/PlayersPage';
import HooksPage from '../components/HooksPage';
import NotesPage from '../components/NotesPage';
import NPCsPage from '../components/NPCsPage';
import '../components/PlayersPage.scss';

const AppRouter = () => (
  <BrowserRouter>
    <div className="App">
      <Header />
      <Route path="/" exact={true} component={PlayersPage} />
      <Route path="/npcs" component={NPCsPage}/>
      <Route path="/hooks" component={HooksPage}/>
      <Route path="/notes" component={NotesPage}/>
    </div>
  </BrowserRouter>
);

export default AppRouter;