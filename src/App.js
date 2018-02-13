import React, { Component } from 'react';
import './App.css';
import Main from './MainComponent.js';
import Single from './SingleComponent.js';
import Search from './SearchComponent.js';
import NotFound from './NotFoundComponent.js';
import { Route, Switch } from 'react-router';


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
          id: element.id
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
          <div>
            <h3>Random organisation:</h3>
            <Search onTextChange={text => {
                this.setState({searchString: text})
            }}/>
            <Switch>
              <Route exact path="/" render={props => <Main org={renderList} />}/>
              <Route path="/single/:orgId" component={Single} />
              <Route component={NotFound} />
            </Switch>
          </div>
      </div>
    );
    
  }
}

export default App;
