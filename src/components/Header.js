import React, { Component } from "react";
import Typical from "react-typical";
import Switch from "react-switch";
import Particles from "./Particle";

class Header extends Component {
  titles = [];

  constructor() {
    super();
    this.state = { checked: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  

  render() {
    const isDarkMode = this.state.checked;
    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
      var homeLogo = "images/" + this.props.sharedData.icon;
      this.titles = this.props.sharedData.titles.map((x) => [
        x.toUpperCase(),
        1500,
      ]).flat();
    }

    const HeaderTitleTypeAnimation = React.memo(() => {
      return <Typical className="title-styles" steps={this.titles} loop={50} />;
    }, (props, prevProp) => true);

    return (
      <header
        id="home"
        style={{ height: window.innerHeight - 140, display: "block",position: "relative" }}
      >
         <Particles isDarkMode={isDarkMode} />
        <div className="row aligner" style={{ height: "100%",position: "sticky", bottom: "0" }}>
          <div className="col-md-7">
          <span
              className={`iconify header-icon ${isDarkMode ? "white-icon" : "black-icon"}`}
              data-icon="la:laptop-code"
              data-inline="false"
            ></span>
            <br />
            <h1 className="mb-0">
              <Typical steps={[name]} wrapper="p" />
            </h1>
            
            <div className="title-container">
              <HeaderTitleTypeAnimation />
            </div>
            <Switch
              checked={this.state.checked}
              onChange={this.onThemeSwitchChange}
              offColor="#baaa80"
              onColor="#353535"
              className="react-switch mx-auto"
              width={90}
              height={40}
              uncheckedIcon={
                <span
                  className="iconify"
                  data-icon="twemoji:owl"
                  data-inline="false"
                  style={{
                    display: "block",
                    height: "100%",
                    fontSize: 25,
                    textAlign: "end",
                    marginLeft: "20px",
                    color: "#353239",
                  }}
                ></span>
              }
              checkedIcon={
                <span
                  className="iconify"
                  data-icon="noto-v1:sun-with-face"
                  data-inline="false"
                  style={{
                    display: "block",
                    height: "100%",
                    fontSize: 25,
                    textAlign: "end",
                    marginLeft: "10px",
                    color: "#353239",
                  }}
                ></span>
              }
              id="icon-switch"
            />
          </div>
          
          <div className="col-md-5" style={{ paddingBottom: 20 }}>
            <div className="image-container">
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
