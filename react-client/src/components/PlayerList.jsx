import React from 'react';
import Player from './Player.jsx';

var PlayerList = (props) => (
  <div>
    {console.log('props', props.listOfPlayers)}
    {props.listOfPlayers.map(person => 
    	<Player person={person} />
    )}
  </div>
)


export default PlayerList