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
    this.state = {
      serverData: {},
      searchString: ''
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({serverData: fakeData});
    }, 100);
  }

  render() {
    let renderList = this.state.serverData.organisations 
          && this.state.serverData.organisations.filter(el =>
            el.name.toLowerCase().includes(this.state.searchString.toLowerCase()));

    return (
      <div className="App">
        {this.state.serverData.organisations ?
          <div>
            <h1>Random organisation:</h1>
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
