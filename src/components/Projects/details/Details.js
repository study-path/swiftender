import React from 'react';
import { CgCalculator } from 'react-icons/cg';
import { FaRegFileAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { VscSettings } from 'react-icons/vsc';

import Divisions from './Divisions';
import GeneralInformation from './GeneralInformation';
import PieCharts from './PieCharts';

const styles = {
  bottom:{
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px'
  },
  button:{
    padding: '10px',
    marginRight: '5px',
    backgroundColor: '#0AA300',
    color: 'white',
    borderRadius: '5px',   
    border: 'none',    
  },
  buttonDivision:{
    padding: '10px',
    marginRight: '5px',
    backgroundColor: '#3399CC',
    color: 'white',
    borderRadius: '5px',   
    border: 'none', 
    
  },
  buttonIcon:{
    padding: '10px',
    marginRight: '5px',
    border: 'none',
    bordeRradius: '5px'
  },
  paiChart:{
    borderTop: '1px solid  #80808021',
    borderBottom: '1px solid  #80808021'
  },
  info:{
    display:'flex',
    columnGap: '10px',
    padding:'10px'
  },
  generalInfo:{
    width: '65%'
  },
  divisions:{
    width: '35%'
  }
};

const Details = () => {
  
  return (
    <div>
      <div style={styles.bottom}>
        <button style={styles.button}>&#10010; New Revesion</button>
        <div>
          <button style={styles.button}><MdEmail />Custom Email</button>
          <button style={styles.button}><MdEmail />Send Invites</button>
          <button style={styles.buttonDivision}><VscSettings />Division Settings</button>      
          <button style={styles.buttonIcon}><FaRegFileAlt /></button>
          <button style={styles.buttonIcon}>< CgCalculator /></button>
        </div>      
      </div>
      <div style={styles.paiChart}>
        <PieCharts />
      </div>
      <div style={styles.info}>
        <GeneralInformation style={styles.generalInfo}/>
        <Divisions style={styles.divisions}  />
      </div>
    </div>
  )
};

export default Details;