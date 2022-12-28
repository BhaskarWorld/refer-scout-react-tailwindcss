import React from "react";
import {isArray} from "../Utilities/Utils"
import DynamicHeroIcon from "./DynamicHeroIcons";
import TailwindCssButton from "./TailwindCssButton";


class AppBar extends React.Component {

    render() {
        const Items = isArray(this.props.MenuItems) ? this.props.MenuItems : [];
        const AvatarLetter = this.props.UserName ? this.props.UserName[0] : "";

        return (
            <div className="flex flex-row flex-auto shadow-md ml-1">
                <button className="flex-initial lg:hidden  center-items basis-16" onClick={this.props.toggleSideBar}>
                    <DynamicHeroIcon className={`${this.props.isSideBarOpen?'rounded-full ':'!w-7 !h-7 rounded-md '}  p-1  hover-toggle transition ease-in-out duration-300`} icon={this.props.isSideBarOpen?"MdArrowBackIosNew":"HiMenu"} />
                </button>
                <div className="md:flex-auto md:flex md:flex-col hidden pl-6">
                    <ul className="flex flex-row flex-grow ">
                        {Items.map((item, index) => {
                            return (
                                <li className=" center-items flex-auto " key={index}>
                                    <TailwindCssButton key={index}>{item}</TailwindCssButton>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="  sm:flex-auto"></div>
                <div className=" grid grid-flow-row items-center justify-end flex-grow flex-initial ">
                    <div className="px-3 sm:px-20">
                        <div className="avatar">{AvatarLetter}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AppBar;