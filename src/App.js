import React, { Component } from 'react';
import './App.css';
import Main from './MainComponent.js';
import Single from './SingleComponent.js';
import Search from './SearchComponent.js';
import { Route } from 'react-router';


class App extends Component {
  constructor() {
    super();
    this.state = {
      serverData: {},
      searchString: ''
    }
  }

  componentDidMount() {
    fetch('https://api-v3.mojepanstwo.pl/dane/krs_podmioty.json').then(res => res.json())
    .then(data => {
      return data.Dataobject.map(element => {
        let FetchedOrg = {
          name : element.data["krs_podmioty.nazwa"],
          number: element.data["krs_podmioty.krs"],
          www: element.data["krs_podmioty.www"],
          mail: element.data["krs_podmioty.email"],
          adress: element.data["krs_podmioty.adres"],
          url: element.url
        }
        return FetchedOrg;
      });
    }).then(el => ({organisations: el})).then(el => this.setState({serverData: el}));
  }

  render() {
    let renderList = this.state.serverData.organisations 
          && this.state.serverData.organisations.filter(el =>
            el.name.toLowerCase().includes(this.state.searchString.toLowerCase()));

    return (
      <div className="App">
        {this.state.serverData.organisations ?
          <div>
            <h3>Random organisation:</h3>
            <Search onTextChange={text => {
                this.setState({searchString: text})
            }}/>
            <Route exact path="/" render={props => <Main org={renderList} />}/>
            <Route path="/single" component={Single} />
          </div>
        : ""}
      </div>
    );
    
  }
}

export default App;
