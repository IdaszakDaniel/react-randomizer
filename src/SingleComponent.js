import React, { Component } from 'react';

class Single extends Component{
    render(){
      return(
        <div>
          <p>SINGLE COMPONENT {this.props.match.params.orgId}</p>
        </div>
      );
    }
  }

export default Single;