import React from "react";
import { Link } from "react-router-dom";
import { MdHome, MdList, MdPeople, MdAttachMoney } from "react-icons/md";
import { Nav } from "react-bootstrap";
import "./SideBar.scss";

class SideBar extends React.Component {
  render() {
    return (
      <div className="side-bar-container">
        <Nav className="sidebar-nav">
          <Link className="sidebar-nav__link"  to="/">
            <MdHome className="icon-white" />
            Главная
          </Link>

          <Link className="sidebar-nav__link" to="/affairs">
            <MdList className="icon-white" />
            Список покупок
          </Link>

          <Link className="sidebar-nav__link" to="/guests">
            <MdPeople className="icon-white" />
            Гости
          </Link>

          <Link className="sidebar-nav__link" to="/budget">
            <MdAttachMoney className="icon-white" />
            Бюджет
          </Link>
        </Nav>
      </div>
    );
  }
}

export default SideBar;
