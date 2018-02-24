import React, { Component } from 'react';
import List from './ListComponent.js';
import Search from './SearchComponent.js';

class Main extends Component{
    constructor(props){
      super(props);
    }

    render(){
      let renderList = this.props.org;
      return(
        <div>
          <Search onTextChange={text => {
            this.props.getSearchString(text)
          }}/>
          {renderList && renderList.map(org =>
            <List org={org} />
          )}
        </div>
      );
    }
  }

export default Main;