import './App.css';
import React from 'react';
import Logo from './images/Logo.png';
import Cards from './Components/Cards';
import AppBar from './Components/AppBar';
import SideBar from './Components/SideBar';
import ReferalProgram from './Components/Pages/ReferalProgram';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSideBarOpen: false
    }
    this.toggleSideBar = this.toggleSideBar.bind(this);
  }

  toggleSideBar = () => {
    const currentState = this.state;
    this.setState({ isSideBarOpen: !currentState.isSideBarOpen });
  };

  componentDidMount = () => {
    this.setState({ isSideBarOpen: window.innerWidth >= 1024 })
    window.addEventListener("resize", () => {
      this.setState({ isSideBarOpen: window.innerWidth >= 1024 })
    })
    window.addEventListener("load", () => {
      this.setState({ isSideBarOpen: window.innerWidth >= 1024 })
    })
  }

  render() {
    return true ? (
      <div className="layout-main-app">
        {this.state.isSideBarOpen && <
          div className="layout-side-bar" >
          <SideBar
            mounted={this.state.isSideBarOpen}
            BrandLogo={Logo}
            ButtonsData={{
              "MdSpaceDashboard": "Dashboard",
              "MdPeople": "Employees",
              "HiBriefcase": "Job Listings",
              "MdPersonAddAlt1": "Candidates",
              "FaHandshake": "Referal program",
              "HiOfficeBuilding": "Company"
            }} />
        </div>
        }
        <div className='layout-right-content'>
          <div className='layout-app-bar'>
            <AppBar UserName="Bhaskar"
              isSideBarOpen={this.state.isSideBarOpen}
              toggleSideBar={this.toggleSideBar}
              MenuItems={["Referal Rewards",
                "ScoutPoints",
                "Reward Shop",
                "Referal Program"]} />
          </div>
          <div className='layout-main-content'>
            <ReferalProgram
              CardsJson={[
                {
                  src: "https://wallpaperaccess.com/full/1308159.jpg",
                  title: "Amazon",
                  "Product Details": {
                    "Product Name": {"Dropdown":null, "Unit": null },
                    "Quantity in stock": {"Dropdown":null, "Unit": "Units" },
                    "Redemption Amt": {"Dropdown":null, "Unit": "Coins" },
                    "Product Category": {"Dropdown":["Amazon","uihefdj","judi"], "Unit": null },
                    "Delivery Method": {"Dropdown":["BHaskar","Amazon","judi"], "Unit": null },
                  }
                },
                {
                  src: "https://images.indianexpress.com/2021/08/Spotify.jpg",
                  title: "Spotify",
                  "Product Details": {
                    "Product Name": {"Dropdown":null, "Unit": null },
                    "Quantity in stock": {"Dropdown":null, "Unit": "Units" },
                    "Redemption Amt": {"Dropdown":null, "Unit": "Coins" },
                    "Product Category": {"Dropdown":["Spotify","uihefdj","judi"], "Unit": null },
                    "Delivery Method": {"Dropdown":["BHaskar","Spotify","judi"], "Unit": null },
                  }
                },
                {
                  src: "https://i0.wp.com/www.alphr.com/wp-content/uploads/2020/03/How-to-Add-Device-for-Google-Play.jpg?fit=1000%2C563&ssl=1",
                  title: "Google Play",
                  "Product Details": {
                    "Product Name": {"Dropdown":null, "Unit": null },
                    "Quantity in stock": {"Dropdown":null, "Unit": "Units" },
                    "Redemption Amt": {"Dropdown":null, "Unit": "Coins" },
                    "Product Category": {"Dropdown":["Google Play","uihefdj","judi"], "Unit": null },
                    "Delivery Method": {"Dropdown":["BHaskar","Google Play","judi"], "Unit": null },
                  }
                },
                {
                  src: "https://en.mzadqatar.com//uploads/images/2020/25/04/10364932-lthmx0zntprzyjj.png",
                  title: "Apple",
                  "Product Details": {
                    "Product Name": {"Dropdown":null, "Unit": null },
                    "Quantity in stock": {"Dropdown":null, "Unit": "Units" },
                    "Redemption Amt": {"Dropdown":null, "Unit": "Coins" },
                    "Product Category": {"Dropdown":["Apple","uihefdj","judi"], "Unit": null },
                    "Delivery Method": {"Dropdown":["BHaskar","Apple","judi"], "Unit": null },
                  }
                },
              ]}
              
            />
          </div>
        </div>
      </div>
    ) : (
      <Cards ImageSource={"https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg"} />
    )

  }
}






export default App;