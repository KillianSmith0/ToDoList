import React from 'react';

class NavBar extends React.Component{
  render(){
    let pages = ['All\t\t', 'Active\t\t', 'Completed\t\t'];
    let tags = pages.map(page => <a href={"#"} key={page}>{page}</a>);

    return <nav>{tags}</nav>;
  }
}

export default NavBar;
