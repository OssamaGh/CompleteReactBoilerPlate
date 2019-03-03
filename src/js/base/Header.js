import React, { Component } from "react";
import FloatingMenu from "../components/FloatingMenu";

class Header extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    setTimeout(function () {
      $('#book-now').addClass('width-auto');
      $("#book-now").text("Book Now");
    }, 500);
    setTimeout(function () {
      $('#book-now').removeClass('width-auto');
      $("#book-now").text("");
    }, 3000);
  }

  render() {
    return (
      < div className="header shadow-bar margin-1em" >

        < div className="float-r inline-box" >
          <FloatingMenu />
        </div>
      </div>
    );
  }
}


export default Header;
