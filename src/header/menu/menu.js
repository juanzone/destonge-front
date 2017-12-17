import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './menu.css'

class Menu extends Component {
  render() {
    return (
      <div className="row menu text-center">
      {this.props.data.map((menu, index) =>{
        return (
          <Link to={"/" + menu.link} key={index}>
          <div className="menu-nav">
            {menu.title}
          </div>
          </Link>
        )
      })}
      </div>
    );
  }
}

export default Menu
