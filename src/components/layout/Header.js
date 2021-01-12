import React from 'react';
import { RiPushpin2Fill } from 'react-icons/ri';

const styles = {
  header:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '40px',
    backgroundColor: '#726E6E',
    padding: '0 40px',
    color:'white'
  },
  button:{
    padding: '5px',  
    borderRadius: '3px',   
    border: 'none',
    width: '80px'
  },
  pin:{  
    color:'coral'
  }
};

const Header = () => {
  return (
    <div style={styles.header}>
      <div>
        <RiPushpin2Fill style={styles.pin}/>
        ----------------
      </div>     
      <button style={styles.button}>Logout</button>
    </div>
  )
};

export default Header;
