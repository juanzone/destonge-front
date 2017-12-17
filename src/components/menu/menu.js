import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import './menu-component.css';


class MenuContainer extends Component {

  render() {
    return (
      <Menu width={ "100%" }>
      {this.props.data.menu.map((menu, index) =>{
        return (
          <Link to={"/" + menu.link} key={index}>
          <div className="menu-nav">
            {menu.title}
          </div>
          </Link>
        )
      })}
      </Menu>
    );
  }

}

function mapStateToProps(state){
  return{
      data : state.data
  }
}

export default connect(mapStateToProps)(MenuContainer);
