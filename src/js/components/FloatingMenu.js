import React from "react";
import {
 NavLink
} from 'react-router-dom';

export default class FloatingMenu extends React.Component {

  constructor(props) {
    super(props);
  }

  closeSideNav() {
    $("#menu_trigger").fadeOut(400, function() {
      // Animation complete
    });
  }

  openSideNav() {
    $("#menu_trigger").fadeIn(400, function () {
      // Animation complete
    });
  }

  componentDidMount() {
    $('.menu-item').on("click", function () {
          $("#menu_trigger").fadeOut(400, function () {
            // Animation complete
          });
    })
  }
    
  render() {
        return <div className = "margin-t-15" >
          <div className="a__hamburger" id="menu_hamburger" onClick={this.openSideNav}>
              <span className="a__hamburger_top" />
              <span className="a__hamburger_medium" />
              <span className="a__hamburger_text">MENU</span>
              <span className="a__hamburger_bottom" />
            </div>
          <div className="floating-menu padding-20 margin-1em" id="menu_trigger">
              <div className="menu-close" onClick={this.closeSideNav}>
              </div>
              <div className="menu-header align-center"> Menu </div>
              <div className="menu-list">
                <ul className="padding-l-0">
                  <li className="menu-item list-style-none">
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li className="menu-item list-style-none">
                    < NavLink to = "/about-us" > About Us </NavLink>
                  </li>
                  <li className="menu-item list-style-none">
                    <NavLink to = "/contact-us" > Contact Us </NavLink>
                  </li>
                </ul>
              </div>

              <div className="social-media">
                <div className="social-media-header">Follow Us</div>
                <ul className="padding-l-0 margin-tb-10">
                  <li className="facebook social-media-icon list-style-none" />
                  <li className="instagram social-media-icon list-style-none" />
                  <li className="twitter social-media-icon list-style-none" />
                  <li className="linkedin social-media-icon list-style-none" />
                  <li className="youtube social-media-icon list-style-none" />
                </ul>
              </div>
            </div>
          </div>;
    }
}