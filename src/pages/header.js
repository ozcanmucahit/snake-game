import React, { Component } from "react";
import PropTypes from 'prop-types';

import Content from "./content";

class Header extends  React.Component{
    static propTypes = {
      news: PropTypes.array.isRequired,
      name : PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
      ]).isRequired
    }

  render(){
   
   const element =  this.props.news.map(news =>  
      <Content  
      key={news.id}
        news={news.title}
   
      />)


    return (
  
        <div>
          <h1>Merhaba burası Header</h1>
            
          { element}
          <br/>
              {this.props.name}
            
          </div>
    );
  }
}



export  default Header;