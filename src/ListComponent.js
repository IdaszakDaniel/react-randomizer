import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
          <Link to={`/single/${org.id}`}><h3>{org.name}</h3></Link>
          <p>Number: {org.number}</p>
          <p>Website: {org.www}</p>
          <p>Mail: {org.mail}</p>
          <p>Adress: {org.adress}</p>
        </div>
      );
    }
  }

export default List;