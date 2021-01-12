import React from 'react';

import Menuitem from './Menuitem';
import sideBarMenuData from './sidebar-data'

const styles = { 
  sidebar: {
    backgroundColor: '#4d4d4e',
  },
  img: {
    width: '185px',
    borderBottom: '1px solid white',
    padding: '10px',
  },
  items: {   
    color:'white'
  }
};

const Sidebar = () => {
  function drawMenuItems() {
    return Object.keys(sideBarMenuData).map(key => <Menuitem key={key} data={sideBarMenuData[key]}/>);
  }

  return (
    <div style={styles.sidebar}>
      <img style={styles.img} src= "/images/logo.svg"></img>
      <div style={styles.items}>
        {drawMenuItems()}
      </div>      
    </div>
  )
};

export default Sidebar;