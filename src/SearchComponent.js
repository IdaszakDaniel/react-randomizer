import React, { Component } from 'react';

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

export default Search;