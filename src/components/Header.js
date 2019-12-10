import React from "react"

import Help from "./Help"

// const Header = (props) => {
//   return (
//     <div>
//       <h3>{props.title}</h3>
        // <h3>{props.subtitle}</h3>
//     </div>
//   )
// }

class Header extends React.Component {
  constructor(props){
    super(props) 
    this.state = {
      title: "Blogs",
      subtitle: "Thanks for visiting",
      address: "123 fake st",
      location: "springfield",
      admin: "Mark"
    }
  }

  onButtonClick = (e) => {
    // const data = e.target.value
    this.setState(() => {
      return {
        title: "a new title"
      }
    })
  }

  onLocationChange = () => {
    this.setState(() => {
      return {
        location: "Austin"
      }
    })
  }
  
  render(){
    debugger
    return (
      <div>
        <h1>{this.state.title}</h1>
        <h3>{this.state.subtitle}</h3>
        <button
          onClick={this.onButtonClick}
        >
          change title
        </button>
      <Help 
        secondLevel={this.props.tag}
        address={this.state.address}
        location={this.state.location}
        admin={this.state.admin}
        onLocationChange={this.onLocationChange}
      />
      </div>
    )
  }
}


export default Header

