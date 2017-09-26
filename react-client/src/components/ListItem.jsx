import React from 'react';

const ListItem = (props) => (
  <div >
    <button onClick={() => props.method(props.eachTeam.abbreviation)}> {props.eachTeam.abbreviation} </button>
  </div>
)

export default ListItem;