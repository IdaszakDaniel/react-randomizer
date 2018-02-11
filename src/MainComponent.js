import React, { Component } from 'react';
import List from './ListComponent.js';

class Main extends Component{
    render(){
        let renderList = this.props.org;
      return(
        <div>
            {renderList.map(org =>
                <List org={org} />
            )}
        </div>
      );
    }
  }

export default Main;