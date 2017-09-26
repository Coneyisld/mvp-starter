import React from 'react';

var Player = (props) => (
  <div>
    <h4>#{props.person.player.JerseyNumber} - {props.person.player.LastName} , {props.person.player.FirstName}</h4>
  </div>
)


export default Player