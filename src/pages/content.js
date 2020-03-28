import React, { Component } from "react";
import PropTypes from 'prop-types';


class Content extends  React.Component{
constructor(props){
  super();
  console.log(props)
}



  static  propTypes = {
    news: PropTypes.shape({
      title:PropTypes.string,
      desc:PropTypes.string
    })
  };
    
    render(){
   console.log(this.props);
   const {title ,desc } = this.props;
      return (
        
          <div>
         burası content
       
       
          <div>{title}</div>
          <div>{desc}</div>
          </div>
      );
    }
  }

  export default Content;
