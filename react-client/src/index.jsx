import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import teams from '../../teams.json';
import PlayerList from './components/PlayerList.jsx';
import allPlayers from '../../players.json'

var logo = 'https://cdn.vox-cdn.com/thumbor/e9qYWNhhRZNRITmgIE72qXBp7EU=/0x7:863x582/1310x873/cdn.vox-cdn.com/uploads/chorus_image/image/54143335/nick_young_logo.0.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      allPlayers: allPlayers.rosterplayers.playerentry,
      allTeams: teams,
      currentTeamAbv: 'Philadelphia 76ers',
      currentTeam: "Philadelphia 76ers",
      logoImage: logo,
      filteredTeam: [],
    }
  }
  
  changeCurrent(input){
    var fullTeamName = teams.filter( team => team.abbreviation === input)
    var fullerTeamName = fullTeamName[0].teamName;
    this.setState({
      currentTeam: input,
      currentTeamAbv: fullerTeamName
    })
    this.teamMatch(input);
  }
  
  teamMatch(team) {
    var playersOnTeam = this.state.allPlayers.filter(person => (person.team.Abbreviation) === this.state.currentTeam)
    this.setState({
      filteredTeam: playersOnTeam
    })
  }

  // defaultName(team) {
  //   {console.log('defaultName was run')}
  //   this.setState({
  //     currentTeamAbv: team
  //   })
  // }

  // componentDidMount() {
  //   $.ajax({
  //     type: 'GET',
  //     Authorization: {coneyisld: 63414},
  //     url: 'https://api.mysportsfeeds.com/v1.1/sample/pull/nba/2016-2017-regular/roster_players.json?fordate=20161027&',
  //     contentType: 'application/json',
  //     success: (data) => {
  //       console.log('PLAYERS:', data.rosterplayers.playerentry)
  //       this.setState({
  //         getData: data.rosterplayers.playerentry
  //       })
  //     },
  //     error: (err) => {
  //       console.log('ERROR', err)
  //     }
    
  //   })
  // }


  render () {
    return (<div>
      <img src={this.state.logoImage}/>
      <h1>NBA Roster </h1>
      <div className='teamName'>
        <h2>Current Team: <span>{this.state.currentTeamAbv}</span></h2>
      
      </div>
        <List teams={this.state.allTeams} method={this.changeCurrent.bind(this)} />
        {console.log("ALL PLayers:", this.state.allPlayers)}
        <PlayerList listOfPlayers={this.state.filteredTeam} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
