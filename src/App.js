import React, { Component } from 'react';
import './App.css';

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

class List extends Component{
  render(){
    let org = this.props.org;
    return(
      <div>
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
    this.state = {serverData: {}}
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({serverData: fakeData});
    }, 100);
  }

  render() {
    return (
      <div className="App">
        {this.state.serverData.organisations ?
          <div>
            <h1>Random organisation:</h1>
            {this.state.serverData.organisations.map(org =>
              <List org={org}/>
            )}
          </div>
        : ""}
      </div>
    );
  }
}

export default App;
