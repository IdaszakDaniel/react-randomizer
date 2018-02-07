import React, { Component } from 'react';
import './App.css';
import { log } from 'util';

let fakeData  = {
  organisations : [
    {
      name: "Lorem Ipsum",
      number: 123456,
      www: "www.abc.com",
      mail: "abc@abc.pl",
      adress: "Warszawska 32, 03-938 Warszawa"
    },
    {
      name: "ABC DEF",
      number: 789987,
      www: "www.zxc.com",
      mail: "zxc@zxc.pl",
      adress: "Warszawska 32, 03-938 Warszawa"
    }  
  ]
}



class Search extends Component{
  render(){
    return (
      <div>
        <input type="text" onKeyUp={event => 
          this.props.onTextChange(event.target.value)} />
      </div>
    );
  }
}

class List extends Component{
  render(){
    let org = this.props.org;
    let listStyle = {
      width: '30%',
      display: 'inline-block',
      verticalAlign: 'top',
      margin: '10px',
      border: '1px solid gray',
      borderRadius: '20px',
      textAlign: 'center',
      fontSize: '15px',
      height: '350px'
    };
    return(
      <div style={listStyle}>
        <h3>{org.name}</h3>
        <p>Number: {org.number}</p>
        <p>Website: {org.www}</p>
        <p>Mail: {org.mail}</p>
        <p>Adress: {org.adress}</p>
      </div>
    );
  }
}

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
            {renderList.map(org =>
              <List org={org} />
            )}
          </div>
        : ""}
      </div>
    );
    
  }
}

export default App;
