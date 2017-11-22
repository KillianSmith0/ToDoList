import React from 'react';

class NavBar extends React.Component{
  render(){
    let pages = ['All', 'Active', 'Completed'];
    let tags = pages.map(page => <a href={'/'+page}>{page}</a>);

    return (<nav>{tags}</nav>);
  }
}

export default NavBar;
