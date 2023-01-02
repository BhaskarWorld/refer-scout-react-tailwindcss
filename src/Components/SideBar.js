import React from "react";
import { isDict } from "../Utilities/Utils";
import TailwindCssButton from "./TailwindCssButton";

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.transitionEnd = this.transitionEnd.bind(this);
    this.enableSideBarAnimation = this.enableSideBarAnimation.bind(this);
    this.disableSideBarAnimation = this.disableSideBarAnimation.bind(this);
    this.state = {
      show: true,
      animate: false,
    };
  }

  static getDerivedStateFromProps = (props) => {
    // check for the mounted props
    if (!props.mounted) return this.disableSideBarAnimation(); // call outro animation when mounted prop is false
    setTimeout(this.enableSideBarAnimation, 10); // call the into animation
    return {
      // remount the node when the mounted prop is true
      show: true,
    };
  };

  enableSideBarAnimation = () => {
    // css for unmount animation
    this.setState({ animate: true });
  };

  disableSideBarAnimation = () => {
    // css for unmount animation
    this.setState({ animate: false });
  };

  componentDidMount = () => {
    setTimeout(this.enableSideBarAnimation, 10); // call the into animation
  };

  transitionEnd = () => {
    // remove the node on transition end when the mounted prop is false
    this.setState({ show: this.props.mounted });
  };

  render() {
    const ButtonsJson = isDict(this.props.ButtonsData)
      ? this.props.ButtonsData
      : {};
    const ButtonList = [];
    Object.entries(ButtonsJson).forEach(([iconName, buttonValue], index) => {
      ButtonList.push(
        <TailwindCssButton key={index} icon={iconName}>
          {buttonValue}
        </TailwindCssButton>
      );
    });

    return (
      <div
        className={`sm:flex flex-col shadow-lg md:w-52 lg:w-56 xl:w-60 h-full transition-all duration-300  ease-in-out px-7 py-5 ${
          this.state.animate
            ? "enable-animate-sidebar"
            : "disable-animate-sidebar"
        }`}
        onTransitionEnd={this.transitionEnd}
      >
        <div className="flex-initial overflow-hidden rounded px-2 py-1">
          <img alt="refer-scout-logo" src={this.props.BrandLogo} />
        </div>
        <div className="flex-auto md:mt-3 lg:mt-4 ">{ButtonList}</div>
        <div className="flex-initial ">
          <TailwindCssButton icon={"MdOutlineLogout"}>Logout</TailwindCssButton>
        </div>
      </div>
    );
  }
}

export default SideBar;
