import React from 'react';
import Menu from './Menu';
import './App.css';

function Header(props) {
  return (
    <header className="header">
      <h1>{props.name}</h1>
      <Menu links={props.links}></Menu>
    </header>
  )
}


// class Header extends React.Component {
//   // @override
//   render() {
//     return (
//       <header className="header">
//         <h1>{this.props.name}</h1>
//         <Menu links={this.props.links}></Menu>
//       </header>
//     )
//   }
// }









export default Header;