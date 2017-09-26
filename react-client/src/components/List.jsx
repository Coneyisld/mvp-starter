import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
	    <h3> Select a team to display its starters: </h3>
	  <div className='adjacent'>
	    {props.teams.map( (team, i) => <ListItem eachTeam={team} key={i} method={props.method}/>)}
	  </div>
  </div>
)

export default List;