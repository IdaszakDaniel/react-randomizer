import React, { Component } from 'react';

class Single extends Component{
  constructor() {
    super();
    this.state = {
      serverData: {}
    }
  }
  
  componentDidMount() {
    let id = this.props.match.params.orgId;
    fetch(`https://api-v3.mojepanstwo.pl/dane/krs_podmioty/${id}`).then(res => res.json())
    .then(element => {
        let FetchedOrg = {
          name : element.data["krs_podmioty.nazwa"],
          number: element.data["krs_podmioty.krs"],
          www: element.data["krs_podmioty.www"],
          mail: element.data["krs_podmioty.email"],
          adress: element.data["krs_podmioty.adres"]
        }
        return FetchedOrg;
    }).then(el => this.setState({serverData: el}));
  }

    render(){
      let org = this.state.serverData;
      return(
        <div>
          {this.state.serverData.name ? 
            <div>
              <p>{org.name}</p>
              <p>Number: {org.number}</p>
              <p>Website: {org.www}</p>
              <p>Mail: {org.mail}</p>
              <p>Adress: {org.adress}</p>
            </div>
          : <p>Loading</p>}
        </div>
      );
    }
  }

export default Single;